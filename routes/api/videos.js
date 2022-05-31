const express = require("express");
const router = express.Router();
const Video = require("../../models/Video");

const validateVideoInput = require("../../validation/video");
const User = require("../../models/User");

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
            const payload = {
                title: req.body.title,
                description: req.body.description,
                category: req.body.category,
                url: req.body.url,
                uploaderId: req.body.uploaderId
            }
        })
        .catch(err => console.log(err));
});

router.get("/", (req, res) => {
    Video.find()
        .then(videos => res.json(videos))
        .catch(error => res.status(404).json({ novideosfound: "No videos found :("}))
});

router.get("user/:userId", (req, res) => {
    Video.find({ uploaderId: req.params.userId })
        .then(videos => res.json(videos))
        .catch(error => res.status(404).json({ novideosfound: "No videos found :(" }))
});

router.get("/category/:category", (req, res) => {
    Video.find({ category: req.params.category })
        .then(videos => res.json(videos))
        .catch(error => res.status(404).json({ novideosfound: "No videos found :(" }))
});

router.get("/:id", (req, res) => {
    Video.find({ _id: req.params.id })
        .then(video => res.json(video))
        .catch(error => res.status(404).json({ novideofound: "This video does not exist :(" }))
});

module.exports = router;