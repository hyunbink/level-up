const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : "";
    data.reviewerId = validText(data.reviewerId) ? data.reviewerId : "";
    data.revieweeId = validText(data.revieweeId) ? data.revieweeId : "";
    data.score = (data.score > 0 && data.score < 6) ? data.score : -1;
    data.text = validText(data.text) ? data.text : "";

    if (Validator.isEmpty(data.reviewerId)) {
        errors.reviewerId = "Please log in";
    }

    if (Validator.isEmpty(data.revieweeId)) {
        errors.revieweeId = "Couldn't find user";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = "Please enter a title";
    }
    if (Validator.isEmpty(data.text)) {
        errors.text = "Please add details";
    }

    if (data.score < 0) {
        errors.score = "Please enter a valid score";
    }


    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
}