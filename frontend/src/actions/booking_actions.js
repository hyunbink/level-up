import * as bookingAPIUtil from "../util/booking_api_util";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const REMOVE_BOOKING_ERRORS = 'REMOVE_BOOKING_ERRORS';

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
});

const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
});

export const receiveBookingsErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors
});

export const clearBookingsErrors = () => ({
    type: REMOVE_BOOKING_ERRORS
});

export const fetchBooking = bookingId => dispatch => (
    bookingAPIUtil.fetchBooking(bookingId)
        .then(booking => dispatch(receiveBooking(booking)))
);

export const fetchBookings = userId => dispatch => (
    bookingAPIUtil.fetchBookings(userId)
        .then(bookings => dispatch(receiveBookings(bookings)))
);
// export const fetchBookings = () => dispatch => (
//     bookingAPIUtil.fetchBookings()
//         .then(bookings => dispatch(receiveBookings(bookings)))
// );

export const createBooking = booking => dispatch => (
    bookingAPIUtil.createBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)),
        err => dispatch(receiveBookingsErrors(err)))
);

export const updateBooking = booking => dispatch => (
    bookingAPIUtil.updateBooking(booking)
        .then(booking => dispatch(receiveBooking(booking)),
        err=> dispatch(receiveBookingsErrors(err)))
);

export const deleteBooking = bookingId => dispatch => (
    bookingAPIUtil.deleteBooking(bookingId)
        .then(bookingId => dispatch(removeBooking(bookingId)))
);

