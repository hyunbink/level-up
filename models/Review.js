const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reviewerId: {
        type: String,
        required: true
    },
    revieweeId: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = Review = mongoose.model('Review', ReviewSchema);