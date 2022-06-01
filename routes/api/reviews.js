const express = require('express');
const router = express.Router();
const Review = require("../../models/Review");


router.post("/post", (req, res)=> {
    const {errors, isValid } = validateVideoInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const newReview = new Review({
        title: req.body.title,
        reviewerId: req.body.reviewerId,
        revieweeId: req.body.revieweeId,
        score: req.body.score,
        text: req.body.text
    });

    newReview.save()
        .then(review => res.json(review))
        .catch(err=> res.status(422).json({ failedpost: "Failed to post" }))
});

router.put("/:reviewId", (req, res) => {
    Review.updateOne({_id: req.params.id}, req.body)
        .then(review => res.json(review))
        .catch(error=> res.status(404).json({failedupdate: "failed to update"}));
});

router.get("/:userId", (req, res)=> {
    Review.find({revieweeId: req.params.userId})
        .then(reviews=> res.json(reviews))
        .catch(error=> res.status(404).json({noreviews: "couldn't fetch reviews"}));
});

router.delete("/:reviewId", (req, res) => {
    Review.findByIdAndDelete(req.params.reviewId)
        .then((err, video)=> {
            if (err) {
                return res.json(err);
            } else {
                return res.json(video);
            }
        })
});

module.exports = router;