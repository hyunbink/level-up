const { faker } = require('@faker-js/faker');
const _ = require('underscore')
const mongoose = require('mongoose');
const db = require('./config/keys_dev').mongoURI
const User = require('./models/User')
const Video = require('./models/Video')
const Review = require('./models/Review')
const Booking = require('./models/Booking')


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

const videoURLS = {
    "shrimp": [
        "https://www.youtube.com/embed/71DD-nYVmLY",
        "https://www.youtube.com/embed/8pO6iJPbmdk",
        "https://www.youtube.com/embed/7do_6TYTH2o",
        "https://www.youtube.com/embed/9VNIyfcifS0",
        "https://www.youtube.com/embed/tD4RnpjQ76I",
        "https://www.youtube.com/embed/BErL8gg6xsg",
    ],
    "hedgehogs": [
        "https://www.youtube.com/embed/tg4klux97Jc",
        "https://www.youtube.com/embed/0W2k0mC2PvA",
        "https://www.youtube.com/embed/tg4klux97Jc",
        "https://www.youtube.com/embed/nqtgHKEfjvo",
        "https://www.youtube.com/embed/QlYUH5mARF0",
        "https://www.youtube.com/embed/0W2k0mC2PvA",
        "https://www.youtube.com/embed/SoZiZE2Zcng",
    ],
    "raccoons": [
        "https://www.youtube.com/embed/X7JSzAJ3vYs",
        "https://www.youtube.com/embed/6fN599t5QGI",
        "https://www.youtube.com/embed/MFbkUAgxK4Q",
        "https://www.youtube.com/embed/piwg_5UJ22A",
        "https://www.youtube.com/embed/ElH7cq3DoAE",
    ],
	"sugar-gliders": [
        "https://www.youtube.com/embed/vQzl7v-u2TQ",
        "https://www.youtube.com/embed/LanKQFvod5Q",
        "https://www.youtube.com/embed/6g80PN0wppw",
        "https://www.youtube.com/embed/FKzWmg32q6k",
        "https://www.youtube.com/embed/ICa2oTdI1KI",
    ],
    "shoe-dyeing": [
        "https://www.youtube.com/embed/YbBg9nriBHw",
        "https://www.youtube.com/embed/w2FPUxHrUyU",
        "https://www.youtube.com/embed/yFT_C71uilU",
        "https://www.youtube.com/embed/9giFYtkvGLw",
        "https://www.youtube.com/embed/2cC_boInXG0",
    ],
    "felting": [
        "https://www.youtube.com/embed/PnkVLApVejc",
        "https://www.youtube.com/embed/fU6tihDWHhQ",
        "https://www.youtube.com/embed/vIvdsqo_87o",
        "https://www.youtube.com/embed/6DXGINClekY",
        "https://www.youtube.com/embed/_DEIz4QEaq4",
    ],
    "gundam": [
        "https://www.youtube.com/embed/pv_LZrrmwYo",
        "https://www.youtube.com/embed/xfmD1yYqP6k",
        "https://www.youtube.com/embed/7-5IRey5wtI",
        "https://www.youtube.com/embed/3eMBLpD3oRs",
        "https://www.youtube.com/embed/7sAJOJX-yA8",
        "https://www.youtube.com/embed/JPaqcN6QwyE",
        "https://www.youtube.com/embed/T16MLd1f1X4",
    ],
    "astrophysics": [
        "https://www.youtube.com/embed/UniM3txg7E0",
        "https://www.youtube.com/embed/FXiPpw8GwxQ",
        "https://www.youtube.com/embed/0rHUDWjR5gg",
        "https://www.youtube.com/embed/vGw0l8qLlOA",
        "https://www.youtube.com/embed/hbmf0bB38h0",
        "https://www.youtube.com/embed/XW_qIqLhPkI",
    ],
    "ufo-sightings": [        
        "https://www.youtube.com/embed/FAMCx6Kr1k8",
        "https://www.youtube.com/embed/YR4mDKwagAA",
        "https://www.youtube.com/embed/jw5I0DqmPnA",

    ],
    "telescopes": [
        "https://www.youtube.com/embed/NvslqVTNEWs",
        "https://www.youtube.com/embed/ga0lgrSPxh0",
        "https://www.youtube.com/embed/_v1RWyzQAng",
        "https://www.youtube.com/embed/DnILp5TnEuo",
        "https://www.youtube.com/embed/AiFBtBLFsx0",
    ],
    "otamatone": [
        "https://www.youtube.com/embed/pIlPLw_NTB4",
        "https://www.youtube.com/embed/djJxV3aJ7qM",
        "https://www.youtube.com/embed/oY0s9Yiuxl4",
        "https://www.youtube.com/embed/16K3EZ-1H_w",
        "https://www.youtube.com/embed/U4USFBcUats",
    ],
    "zither": [        
        "https://www.youtube.com/embed/6Yb0jJ5kiIQ",
        "https://www.youtube.com/embed/OtkIvboe1bE",
        "https://www.youtube.com/embed/M9oIerpUQo8",
        "https://www.youtube.com/embed/JOE23m-k27E",
        "https://www.youtube.com/embed/VM5UwOHLzqo",
    ],
    "recorder": [
        "https://www.youtube.com/embed/nLeIT3QwKFo",
        "https://www.youtube.com/embed/-d6uVjIEkMY",
        "https://www.youtube.com/embed/iiD2UYWIWmM",
        "https://www.youtube.com/embed/CkHMfEA4CF8",
        "https://www.youtube.com/embed/TM4bm4unJbw",
    ],
    "kazoo": [
        "https://www.youtube.com/embed/3N7Ie3IVGtU",
        "https://www.youtube.com/embed/gbL5Tp8-two",
        "https://www.youtube.com/embed/9rVxKEvqjPg",
        "https://www.youtube.com/embed/g-kGXTCPYk8",
        "https://www.youtube.com/embed/2J_65wxbqPU",
    ],
    "sock-puppets": [
        "https://www.youtube.com/embed/Ym13GbygiSM",
        "https://www.youtube.com/embed/1Nh0n2LcU7I",
        "https://www.youtube.com/embed/AbyDdhVRHq4",
        "https://www.youtube.com/embed/Vxrdk8G3QOI",
    ],
    "dungeons-and-dragons": [
        "https://www.youtube.com/embed/jT3FRzEJDp8",
        "https://www.youtube.com/embed/wHBM9ARGdD8",
        "https://www.youtube.com/embed/aBOH8YLUPjE",
        "https://www.youtube.com/embed/ZsPrUwcjxEw",
        "https://www.youtube.com/embed/BgvHNlgmKro",
    ],
    "cosplay": [
        "https://www.youtube.com/embed/VrDbvfsHx1Q",
        "https://www.youtube.com/embed/nyDBrNGdFw0",
        "https://www.youtube.com/embed/dN3NHy7Asqc",
        "https://www.youtube.com/embed/kSppMZAr0Hw",
        "https://www.youtube.com/embed/GwXjKehCJ5c",
    ],
    "speedrunning": [
        "https://www.youtube.com/embed/zLphAlLQNiE",
        "https://www.youtube.com/embed/KSStfwaOies",
        "https://www.youtube.com/embed/mmJ_LT8bUj0",
        "https://www.youtube.com/embed/05wj07NFdXA",
        "https://www.youtube.com/embed/F7HZT2lmL04",
        "https://www.youtube.com/embed/HU8ELoLu3kA",
    ],
    "modding": [
        "https://www.youtube.com/embed/cJVtu0lZAKM",
        "https://www.youtube.com/embed/q6yHoSvrTss",
        "https://www.youtube.com/embed/zlT8NlQGdlo",
        "https://www.youtube.com/embed/ENEpJJPQomg",
        "https://www.youtube.com/embed/EUxRMPIBIQQ",
    ],
    "lore": [
        "https://www.youtube.com/embed/EmhO1LldIQw",
        "https://www.youtube.com/embed/DYDs_Inzkz4",
        "https://www.youtube.com/embed/eX4pjt0pzUI",
        "https://www.youtube.com/embed/T1tbtDjvsXo",
        "https://www.youtube.com/embed/aIFwhTs51yk",
    ],
    "buzkashi": [
        "https://www.youtube.com/embed/1JUn8MsEyPs",
        "https://www.youtube.com/embed/vPX_7EdBQr8",
        "https://www.youtube.com/embed/ta3izb3CPu",
        "https://www.youtube.com/embed/PDLfFPa5fJU",
    ],
    "speedwalking": [
        "https://www.youtube.com/embed/W1sxFgTUbWo",
        "https://www.youtube.com/embed/erK4_3OuUlY",
        "https://www.youtube.com/embed/k1ZbPI47aD0",
        "https://www.youtube.com/embed/cVkXYYtKFew",
        "https://www.youtube.com/embed/WvX5rO6sNOw",
    ],
    "ostrich-racing": [
        "https://www.youtube.com/embed/QAGg-2vsYNw",
        "https://www.youtube.com/embed/k_1PxrVeTpA",
        "https://www.youtube.com/embed/5uUO5jLz0iY",
        "https://www.youtube.com/embed/rJ0Ex4Xp3gM",
        "https://www.youtube.com/embed/8dcO5eANCgo",
    ],
    "smart-mirrors": [
        "https://www.youtube.com/embed/RWjvJq4Zabk",
        "https://www.youtube.com/embed/DjPGoGmO5VY",
        "https://www.youtube.com/embed/OYlloiaBINo",
        "https://www.youtube.com/embed/rR3btsxWM5Q",
        "https://www.youtube.com/embed/Prq9iuZBNzI",
    ],
    "computer-mice": [
        "https://www.youtube.com/embed/pgfiFMnQAH0",
        "https://www.youtube.com/embed/Stf8UmIaJuo",
        "https://www.youtube.com/embed/mkZYyrKINl4",
        "https://www.youtube.com/embed/AHAIfAuY1AY",
        "https://www.youtube.com/embed/qz9WBbrDJj4",
    ],
    "macro-pad": [
        "https://www.youtube.com/embed/4ftBkXvUyaI",
        "https://www.youtube.com/embed/_aW90ufD6X0",
        "https://www.youtube.com/embed/wf0uEyBQbeU",
        "https://www.youtube.com/embed/6-c8Fw96aFg",
        "https://www.youtube.com/embed/BNuveP3eKpw",
    ],
};

const bookingDurations = [
    "30 minutes",
    "1 hour",
    "1 hour 30 minutes",
    "2 hours",
    "2+ hours",
]

// Change numbers to quickly scale db seeds up or down
let numUsers = 20;
let numProfsPerCategory = 8;
let numVideosPerProf = 2;
let numReviewsPerProf = 20;
let numBookingsPerProf = 20;

// Generates date in yyyy-mm-dd
function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

let startDate = new Date(2021, 0, 1);
let endDate = new Date(2023, 0, 1);

const seedDB = async() => {
    // Reset database
    await User.deleteMany({});
    await Video.deleteMany({});
    await Review.deleteMany({});
    await Booking.deleteMany({});

    let users = [];
    let videos = [];
    let reviews = [];
    let bookings = [];

    let newUser;
    let newProf;

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
            bio: faker.lorem.paragraphs(3),
        });
        await newUser.save();
        users.push(newUser._id);
    }

    // Object.keys(categoriesTopicsObj).forEach(category => {
    for (let z = 0; z < categoryNames.length; z++) {
        for (let i = 0; i < numProfsPerCategory; i++) {
            let specialty = _.sample(categoriesTopicsObj[categoryNames[z]]);
            let interest = _.sample(categoryNames);
            while (specialty === interest) interest = _.sample(Object.keys(categoriesTopicsObj));
            newProf = new User({
                photoUrl: faker.image.avatar(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                email: faker.internet.email(),
                password: '123456',
                professional: true,
                topics: specialty,
                interests: interest, // Uses underscore package method. Look up docs
                bio: faker.lorem.paragraphs(3),
                // bio: _.sample(bios)
            });

            // Using .save instead of .create so we can still access the newProfs info
            await newProf.save()
                // .then() Retreive the newProfs _id

            for (let j = 0; j < numVideosPerProf; j++) {
                videos.push({
                    uploaderId: newProf._id,
                    title: faker.vehicle.vehicle(),
                    description: faker.lorem.paragraphs(3),
                    category: topics[specialty],
                    topic: specialty,
                    url: _.sample(videoURLS[specialty]),
                });
            }

            for (let k = 0; k < numReviewsPerProf; k++) {
                reviews.push({
                    title: faker.lorem.sentence(4),
                    reviewerId: _.sample(users),
                    revieweeId: newProf._id,
                    score: Math.ceil(Math.random() * 5),
                    text: faker.lorem.paragraphs(1)
                });
            }

            for (let l = 0; l < numBookingsPerProf; l++) {
                let bookingDate = randomDate(startDate, endDate);
                bookings.push({
                    bookingStudId: _.sample(users),
                    bookingProfId: newProf._id,
                    title: faker.lorem.sentence(4),
                    date: bookingDate,
                    duration: _.sample(bookingDurations)
                });
            }
        }
    };

    await Video.insertMany(videos);
    await Review.insertMany(reviews);
    await Booking.insertMany(bookings);


    let demoUser = new User({
        photoUrl: "https://www.asiaone.com/sites/default/files/styles/a1_og_image/public/original_images/Apr2021/20210401_harold_fb.jpg?itok=Ha6irvdn",
        firstName: "Demo",
        lastName: "User",
        email: "demo@mail.com",
        password: "$2a$10$YSmrZ011s3bOorO9SAz61Orm7184ox3FGpmO9NZegMq2ieWXU9Cf.",
        professional: true,
        topics: "ostrich-racing",
        interests: "buzkashi", // Uses underscore package method. Look up docs
        bio: faker.lorem.paragraphs(3),
    });

    await demoUser.save();

}

seedDB()
    .then(() => mongoose.connection.close())