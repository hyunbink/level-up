const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI
const User = require('./models/User')
const Video = require('./models/Video')
const Review = require('./models/Review')
const Booking = require('./models/Booking')


//connection to the database 
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(()=> console.log("Connected to MongoDB successfully"))
    .catch(err=> console.log(err));

const categories = [
    
];

const topics = {
    "shrimp": "animal-husbandry",
    "hedgehogs": "animal-husbandry",
    "shoe-dying": "arts-and-crafts",
};

const videoURLs = [

];

const bookingDurations = [
    "30 mins",
    "1 hour",
    "1.5 hours",
]

let numUsers = 1;
let numProfsPerTopic = 1;
let numVideosPerProf = 1;
let numReviewsPerProf = 1;
let numBookingsPerProf = 1;

const seedDB = async() => {
    // Reset database
    await User.deleteMany({});
    await Video.deleteMany({});
    await Review.deleteMany({});
    await Booking.deleteMany({});

    let users = [];
    let profs = [];
    let videos = [];
    let reviews = [];
    let bookings = [];

    for (let i = 0; i < numUsers; i++) {
        users.push({
            // Can use faker.image.avatar() for propic. Returns a string.
            // proPic: faker.image.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: '123456',
            professional: false,
            categories: "",
            interests: _.sample(Object.keys(topics)), // Uses underscore package method. Look up docs
            bio: faker.lorem.paragraphs(3),
            // bio: _.sample(bios)
        });
    }

    await User.insertMany(users);

    for (let i = 0; i < numProfsPerTopic; i++) {
        let temp = _.sample(Object.keys(topics), 2);
        let specialty = temp[0];
        let interest = temp[1];
        newProf = new User({
            // Can use faker.image.avatar() for propic. Returns a string.
            // proPic: faker.image.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: '123456',
            professional: true,
            categories: specialty,
            interests: interest, // Uses underscore package method. Look up docs
            bio: faker.lorem.paragraphs(3),
            // bio: _.sample(bios)
        });

        // Using .save instead of .create so we can still access the newProfs info
        await newProf.save()
            // .then() Retreive the newProfs _id

        for (let j = 0; i < numVideosPerProf; j++) {
            videos.push({
                uploaderId: newProf._id,
                title: faker.vehicle(),
                description: faker.lorem.paragraphs(3),
                category: specialty,
                url: "https://www.youtube.com/embed/U7X6pdVM9cA"
            });
        }

        for (let j = 0; i < numReviewsPerProf; j++) {
            videos.push({
                title: "",
                reviewerId: "",
                revieweeId: newProf._id,
                score: Math.ceil(Math.random() * 5),
                text: faker.lorem.paragraphs(2)
            });
        }

        for (let j = 0; i < numBookingsPerProf; j++) {
            videos.push({
                bookingStudId: "",
                bookingProfId: newProf._id,
                title: "", // Why does it even need a title?
                date: "",
                duration: _.sample(bookingDurations)
            });
        }
    }
}