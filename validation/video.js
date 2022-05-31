const Validator = require('validator');
const validText = require('./valid-text');

const categories = [
    "piano",
    "photography",
    "turtles",
    "hedgehogs",
    "shrimps",
    "coffee",
    "painting",
    "keyboards",
    "haircutting",
    "welding",
    "machining"
]

module.exports = function validateVideoInput(data) {
    let errors = {};

    data.uploaderId = validText(data.uploaderId) ? data.uploaderId : "";
    data.title = validText(data.title) ? data.title : "";
    data.description = validText(data.description) ? data.description : "";
    data.category = validText(data.category) ? data.category : "";

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title cannot be empty";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description cannot be empty";
    }

    if (Validator.isEmpty(data.category)) {
        errors.category = "You must select a category";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}