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


router.get("/", (req, res)=> {
    Booking.find()
        .then(bookings=> res.json(bookings))
        .catch(error => res.status(404).json({nobookingsfound: "No bookings found"}))
});

router.get("/:id", (req, res)=> {
    Booking.find({_id: req.params.id})
        .then(booking=> res.json(booking))
        .catch(error => res.status(404).json({nobookingfound: "No booking found"}))
});

router.put('/:bookingId', (req, res) => {
    const { errors, isValid } = validateBookingInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Booking.updateOne({ _id: req.params.bookingId }, req.body)
        .then(booking => res.json(booking))
        .catch(err => res.status(404).json({ failedupdate: "Failed to update" }))

});

// need routes to get via student and prof ?

module.exports = router;