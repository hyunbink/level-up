import { RECEIVE_BOOKING, RECEIVE_BOOKINGS, REMOVE_BOOKING } from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOOKINGS:
            return Object.assign({}, state, action.bookings);
        case RECEIVE_BOOKING:
            return Object.assign({}, {[action.booking.data._id]: action.booking.data});
        case REMOVE_BOOKING:
            let delBooking = Object.assign({}, state);
            delete delBooking[action.bookingId];
            return delBooking;
        default:
            return state;
    }
}

export default bookingsReducer;