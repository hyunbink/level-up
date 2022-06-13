const Validator = require('validator');
const validText = require('./valid-text');

const topics = [
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
    console.log("data", data);
    data.uploaderId = validText(data.uploaderId) ? data.uploaderId : "";
    data.title = validText(data.title) ? data.title : "";
    data.description = validText(data.description) ? data.description : "";
    data.topic = validText(data.topic) ? data.topic : "";
    data.category = validText(data.category) ? data.category : "";
    data.video = data.video=== "undefined" ? "" : data.video;

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title cannot be empty";
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = "Description cannot be empty";
    }

    if (Validator.isEmpty(data.topic)) {
        errors.topic = "You must select a topic";
    }

    if (Validator.isEmpty(data.category)) {
        errors.category = "You must select a category";
    }

    if (Validator.isEmpty(data.video)) {
        errors.video = "Please enter a valid video file";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}