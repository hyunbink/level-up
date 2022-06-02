const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI
const User = require('./models/User')
const Video = require('./models/Video')
// const Review = require('./models/Review')
// const Booking = require('./models/Booking')


//connection to the database 
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(()=> console.log("Connected to MongoDB successfully"))
    .catch(err=> console.log(err));


