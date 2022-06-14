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
app.use(bodyParser.json({limit: 52428800}));

//route 
app.use("/api/users", users);
app.use("/api/videos", videos);
app.use("/api/bookings", bookings);
app.use("/api/reviews", reviews);

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

const port = process.env.PORT || 4000;

// app.listen(port, ()=> console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('frontend/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('frontend/build'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   })
// }

server.listen(port, () => console.log(`Socket.io Server is running on port ${port}`))