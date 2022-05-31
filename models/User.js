const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    professional: {
        type: Boolean,
        required: true,
        default: false
    },
    categories: {
        type: String,
        default: ""
    },
    interests: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: "",
    }
}, {
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);