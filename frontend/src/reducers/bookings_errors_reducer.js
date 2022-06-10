const { RECEIVE_BOOKING_ERRORS, REMOVE_BOOKING_ERRORS, RECEIVE_BOOKING } = require("../actions/booking_actions");

const bookingsErrorsReducer = (state = [], action) => {
    console.log("action in booking errors reducer", action);
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BOOKING_ERRORS:
            return Object.values(action.errors.response.data);
        case REMOVE_BOOKING_ERRORS:
            return [];
        case RECEIVE_BOOKING:
            return [];
        default:
            return state;
    }
}

export default bookingsErrorsReducer;