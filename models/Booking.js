const mongoose = require("mongoose");
const Schema = mongoose.mongoose.Schema;

const BookingSchema = new Schema({
    bookingStudId: {
        type: String,
        required: true
    },
    bookingProfId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = Booking = mongoose.model('Booking', BookingSchema);