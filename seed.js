const { faker } = require('@faker-js/faker');
const _ = require('underscore');
const mongoose = require('mongoose');
const db = require('./config/keys_dev').mongoURI;
const User = require('./models/User');
const Video = require('./models/Video');
const Review = require('./models/Review');
const Booking = require('./models/Booking');
import {    videoDescriptions, 
            videoTitles,
            videoURLS,
            reviewDescriptions,
            profBios,
        } from "./seed_info";


//connection to the database 
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(()=> console.log("Connected to MongoDB successfully"))
    .catch(err=> console.log(err));

const categoryNames = [
    "animal-husbandry",
    "arts-and-crafts",
    "astronomy",
    "music",
    "role-play",
    "gaming",
    "sports",
    "technology",
];

const categoriesTopicsObj = {
    "animal-husbandry": ["shrimp", "hedgehogs", "raccoons", "sugar-gliders"],
    "arts-and-crafts": ["shoe-dyeing", "felting", "gundam"],
    "astronomy": ["astrophysics", "ufo-sightings", "telescopes"],
    "music": ["otamatone", "zither", "recorder", "kazoo"],
    "role-play": ["sock-puppets", "dungeons-and-dragons", "cosplay"],
    "gaming": ["speedrunning", "modding", "lore"],
    "sports": ["buzkashi", "speedwalking", "ostrich-racing"],
    "technology": ["smart-mirrors", "computer-mice", "macro-pad"],
};

const topics = {
    "shrimp": "animal-husbandry",
    "hedgehogs": "animal-husbandry",
    "raccoons": "animal-husbandry",
    "sugar-gliders": "animal-husbandry",
    "shoe-dyeing": "arts-and-crafts",
    "felting": "arts-and-crafts",
    "gundam": "arts-and-crafts",
    "astrophysics": "astronomy",
    "ufo-sightings": "astronomy",
    "telescopes": "astronomy",
    "otamatone": "music",
    "zither": "music",
    "recorder": "music",
    "kazoo": "music",
    "sock-puppets": "role-play",
    "dungeons-and-dragons": "role-play",
    "cosplay": "role-play",
    "speedrunning": "gaming",
    "modding": "gaming",
    "lore": "gaming",
    "buzkashi": "sports",
    "speedwalking": "sports",
    "ostrich-racing": "sports",
    "smart-mirrors": "technology",
    "computer-mice": "technology",
    "macro-pad": "technology",
};

// Change numbers to quickly scale db seeds up or down
let numUsers = 20;

const seedDB = async() => {
    // Reset database
    await User.deleteMany({});
    await Video.deleteMany({});
    await Review.deleteMany({});

    let users = [];
    let videos = [];
    let reviews = [];

    let newProf;
    
    let newUser;
    for (let i = 0; i < numUsers; i++) {
        newUser = new User({
            photoUrl: faker.image.avatar(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            password: '123456',
            professional: false,
            topics: "",
            interests: _.sample(Object.keys(topics)), // Uses underscore package method. Look up docs
            bio: faker.lorem.sentence(4),
        });
        await newUser.save();
        users.push(newUser._id);
    }

    Object.keys(videoTitles).forEach(topic => {
        videoTitles[topic].forEach((videoTitle, idx) => {
            let specialty = topic;
            let interest = _.sample(categoryNames);
            while (specialty === interest) interest = _.sample(Object.keys(categoriesTopicsObj));
            newProf = new User({
                photoUrl: faker.image.avatar(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: "$2a$10$YSmrZ011s3bOorO9SAz61Orm7184ox3FGpmO9NZegMq2ieWXU9Cf.",
                professional: true,
                topics: specialty,
                interests: interest, // Uses underscore package method. Look up docs
                bio: profBios[topic][idx],
            });

            await newProf.save();

            videos.push({
                uploaderId: newProf._id,
                title: videoTitle,
                description: videoDescriptions[topic][idx],
                category: topics[specialty],
                topic: specialty,
                url: videoURLS[topic][idx],
            });

            reviews.push({
                title: _.sample(reviewDescriptions),
                reviewerId: _.sample(users),
                revieweeId: newProf._id,
                score: Math.ceil(Math.random() * 5),
                text: faker.lorem.paragraphs(1)
            });
        })
    });

    await Video.insertMany(videos);
    await Review.insertMany(reviews);

    let demoUser = new User({
        photoUrl: "https://www.asiaone.com/sites/default/files/styles/a1_og_image/public/original_images/Apr2021/20210401_harold_fb.jpg?itok=Ha6irvdn",
        firstName: "Demo",
        lastName: "User",
        email: "demo@mail.com",
        password: "$2a$10$YSmrZ011s3bOorO9SAz61Orm7184ox3FGpmO9NZegMq2ieWXU9Cf.",
        professional: true,
        topics: "ostrich-racing",
        interests: "buzkashi",
        bio: "If Morbius has a million fans, I am one of them. If Morbius has 5 fans, I am one of them. If Morbius has one fan, That one is me. If Morbius has no fans, I am no longer alive. If the world is against Morbius, I am against the world. Till my last breath, I'll love Morbius (2022).",
    });

    await demoUser.save();

}

seedDB()
    .then(() => mongoose.connection.close())