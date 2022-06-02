import axios from 'axios';

export const fetchBookings = userId => (
    axios.get(`/api/bookings/${userId}`)
);
// export const fetchBookings = () => (
//     axios.get("/api/bookings")
// );

export const fetchBooking = bookingId => (
    axios.get(`/api/bookings/${bookingId}`)
);

export const createBooking = booking => (
    axios.post(`/api/bookings/create`, booking)
);

export const updateBooking = booking => (
    axios.put(`/api/bookings/${booking._id}`, booking)
);

export const deleteBooking = bookingId => (
    axios.delete(`/api/bookings/delete/${bookingId}`)
);

