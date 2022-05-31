const express = require("express");
const router = express.Router();
const Booking = require("../../models/Booking");
const User = require("../../models/User");
const validateBookingInput = require("../../validation/booking");

router.post("/create", (req, res) => {
    const { errors, isValid } = validateBookingInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const newBooking = new Booking({
        bookingStudId: req.body.bookingStudId,
        bookingProfId: req.body.bookingProfId,
        title: req.body.title,
        date: req.body.date, 
        duration: req.body.duration 
    });

    newBooking.save()
        .then(booking => res.json(booking))
        .catch(err => console.log(err));

});


router.get("")