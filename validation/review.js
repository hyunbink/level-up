const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data) {
    let errors = {};

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

    if (data.score < 0) {
        errors.score = "Please enter a valid score";
    }

    if (Validator.isEmpty(data.text)) {
        errors.text = "Please add details";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}