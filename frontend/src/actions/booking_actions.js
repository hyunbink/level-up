import * as bookingAPIUtil from "../util/booking_api_util";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
});

const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
});

export const fetchBooking = bookingId => dispatch => (
    bookingAPIUtil.fetchBooking(bookingId)
        .then(booking => dispatch(receiveBooking(booking)))
);

export const fetchBookings = () => dispatch => (
    bookingAPIUtil.fetchBookings()
        .then(bookings => dispatch(receiveBookings(bookings)))
);

