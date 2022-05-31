const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewer_id: {
        type: String,
        required: true
    },
    reviewee_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = Review = mongoose.model('Review', ReviewSchema);