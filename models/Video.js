const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    uploaderId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    topic: {
        type: String,
    },
    url: {
        type: String,
        required: true,
        default: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
}, {
    timestamps: true
});

module.exports = Video = mongoose.model('Video', VideoSchema)