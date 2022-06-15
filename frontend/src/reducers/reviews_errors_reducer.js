import { RECEIVE_REVIEW, RECEIVE_REVIEW_ERRORS, REMOVE_REVIEW_ERRORS } from "../actions/review_actions";

const reviewsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return Object.values(action.errors.response.data);
        case REMOVE_REVIEW_ERRORS:
            return [];
        case RECEIVE_REVIEW:
            return [];
        default:
            return state;
    }
}

export default reviewsErrorsReducer;