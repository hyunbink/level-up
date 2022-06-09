const express = require('express');
const router = express.Router();
const Review = require("../../models/Review");

const validateReviewInput = require('../../validation/review');

//create a review
router.post("/post", (req, res)=> {
    const {errors, isValid } = validateReviewInput(req.body);

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

//edit a review
router.put("/:reviewId", (req, res) => {
    const {errors, isValid } = validateReviewInput(req.body);
    if (!isValid) {
        console.log("errors", errors);
        return res.status(400).json(errors);
    }

    Review.updateOne({_id: req.params.reviewId}, req.body)
        .then(review => res.json(review))
        .catch(error=> res.status(404).json({failedupdate: "failed to update"}));
});
//get all reviews on that professionals page
router.get("/:userId", (req, res)=> {
    Review.find({revieweeId: req.params.userId})
        .then(reviews=> res.json(reviews))
        .catch(error=> res.status(404).json({noreviews: "couldn't fetch reviews"}));
});
//delete this review
router.delete("/delete/:reviewId", (req, res) => {
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