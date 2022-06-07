const express = require("express");
const router = express.Router();
const Video = require("../../models/Video");

const validateVideoInput = require("../../validation/video");

router.post("/upload", (req, res) => {
    const { errors, isValid } = validateVideoInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newVideo = new Video({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        url: req.body.url,
        uploaderId: req.body.uploaderId
    });

    newVideo.save()
        .then(video => {
            console.log("video", video)
            res.json(video)
        })
        .catch(err => console.log(err));
});

router.put("/:videoId", (req, res) => {
    const { errors, isValid } = validateVideoInput(req.body);
    
    if (!isValid) {
        return res.status(400).json(errors);
    }
    console.log("vedoes route", req)
    Video.updateOne({ _id: req.params.videoId }, req.body)
        .then(video => res.json(video))
        .catch(err => res.status(404).json({ failedupdate: "Failed to update" }))
});

router.delete("/:videoId", (req, res) => {
    const videoId = req.params.videoId;
    Video.findByIdAndDelete(videoId)
        .then((err, video) => {
            if (err) {
                return res.json(err);
            } else {
                return res.json(video);
                // Can chain a .then if we want to send a "Deleted x video" message
            }
        })
});

router.get("/", (req, res) => {
    Video.find()
    .then(videos => {
        let newVideos = {}
        videos.forEach(video => {
            newVideos[video._id] = video;
        });
        return res.json(newVideos);
    })
    .catch(err => res.status(404).json({ novideosfound: "No videos found :("}))
});


router.get("/user/:userId", (req, res) => {
    Video.find({ uploaderId: req.params.userId })
        .then(videos => res.json(videos))
            // let newVideos = {}
            // videos.forEach(video => {
            //     newVideos[video._id] = video;
            // });
            
            // return res.json(newVideos);
        
        .catch(err => res.status(404).json({ novideosfound: "No videos found :(" }))
});

router.get("/category/:category", (req, res) => {
    Video.find({ category: req.params.category })
    .then(videos => {
        let newVideos = {}
        videos.forEach(video => {
            newVideos[video._id] = video;
        });
        return res.json(newVideos);
    })
    .catch(err => res.status(404).json({ novideosfound: "No videos found :(" }))
});

router.get(`/search/:topic`, (req, res)=> {

    // Video.find({topics: {'$regex' : req.params.topic, '$options' : 'i'}});
    // Video.find({topics: new RegExp(req.params.topic, 'i')});
    Video.find({topics: {$regex: req.params.topic}})
        .then(videos=> {
            let newVideos = {}
            videos.forEach(video => {
                newVideos[video._id] = video;
            });
            return res.json(newVideos);
        })
        .catch(err => res.status(404).json({novideosfound: "No videos found"}))
});

router.get("/:id", (req, res) => {
    Video.find({ _id: req.params.id })
    .then(videos => {
        let newVideos = {}
        videos.forEach(video => {
            newVideos[video._id] = video;
        });
        return res.json(newVideos);
    })
    .catch(err => res.status(404).json({ novideofound: "This video does not exist :(" }))
});

module.exports = router;