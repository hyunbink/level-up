const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { faker } = require('@faker-js/faker');


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
    },
    photoUrl: {
        type: String,
        default: faker.image.avatar()
    }
}, {
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);