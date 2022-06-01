import { RECEIVE_BOOKING, RECEIVE_BOOKINGS } from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOOKINGS:
            return Object.assign({}, action.bookings);
        case RECEIVE_BOOKING:
            return Object.assign({}, {[action.booking.data._id]: action.booking.data})
        default:
            return state;
    }
}

export default bookingsReducer;