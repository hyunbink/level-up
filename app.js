const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require("./routes/api/users");
const videos = require("./routes/api/videos");

const bookings = require("./routes/api/bookings")
const reviews = require("./routes/api/reviews");

const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: '*' } });

io.on("connection", (socket) => {
  socket.on("chat", (payload) => {
    io.emit("chat", payload);
  });
});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route 
app.use("/api/users", users);
app.use("/api/videos", videos);
app.use("/api/bookings", bookings);
app.use("/api/reviews", reviews);


// app.get("/", (req, res)=> {
//     const user  = new User({
//         firstName: "jeff",
//         lastName: "smith",
//         email: "jeff@mail.com",
//         password: '123456',
//         professional: true,
//         categories: "shrimp,keyboard",
//         interests: "spearfishing",
//         bio: "Hey guys I am very happy to be learning with you guys"
//     })
//     user.save();
//     res.send("saved");
// })

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`Server is running on port ${port}`));

server.listen(port+1, () => console.log(`Socket.io Server is running on port ${port}`))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }
