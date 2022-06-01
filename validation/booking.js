const Validator = require("validator");
const validText = require("./valid-text");

const durationLengths = [
    "30 minutes",
    "1 hour",
    "1 hour 30 minutes",
    "2 hours",
    "more than 2 hours"
]

module.exports = function validateBookingInput(data) {
    let errors = {};

    data.bookingStudId = validText(data.bookingStudId) ? data.bookingStudId : "";
    data.bookingProfId = validText(data.bookingProfId) ? data.bookingProfId : "";
    data.title = validText(data.title) ? data.title : "";
    data.date = validText(data.date) ? data.date : "";
    data.duration = validText(data.duration) ? data.duration : "";
    
    if (Validator.isEmpty(data.bookingStudId)) {
        errors.bookingStudId = "Who is this booking for?"
    }

    if (Validator.isEmpty(data.bookingProfId)) {
        errors.bookingProfId = "Who is this booking with?"
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = "What is this booking called";
    }

    if (Validator.isEmpty(data.date)) {
        errors.date = "When is this booking for?"
    }

    if (Validator.isEmpty(data.duration) || !durationLengths.includes(data.duration)) {
        errors.duration = "How long is this booking for?"
    } 

    if(Validator.isLength(data.date, { min: 10, max:10 })) {
        errors.date = "Please select from calendar"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}