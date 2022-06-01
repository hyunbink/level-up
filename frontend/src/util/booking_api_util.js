import axios from 'axios';

export const fetchBookings = () => (
    axios.get("/api/bookings")
);

export const fetchBooking = bookingId => (
    axios.get(`/api/bookings/${bookingId}`)

);

