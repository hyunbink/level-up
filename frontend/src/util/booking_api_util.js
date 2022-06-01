import axios from 'axios';

export const fetchBookings = () => (
    axios.get("/api/bookings")
);

export const fetchBooking = bookingId => (
    axios.get(`/api/bookings/${bookingId}`)
);

export const createBooking = booking => (
    axios.post(`/api/bookings/create`, booking)
);

export const deleteBooking = bookingId => (
    axios.delete(`/api/bookings/${bookingId}`)
);

