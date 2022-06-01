import { RECEIVE_USER } from "../actions/user_actions";

const { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } = require("../actions/review_actions");

const reviewsReducer = (state ={}, action) => {
    Object.freeze(state);
    console.log("reducer action", action);
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, action.reviews);
        case RECEIVE_REVIEW:
            console.log("hits here", action);
            if (!action.review.data[0]) {
                return Object.assign({}, state, { [action.review.data._id]: action.review.data });
            }
            return Object.assign({}, state, {[action.review.data[0]._id]: action.review.data[0]});

        case RECEIVE_USER:
            return Object.assign({}, action.reviews);
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            delete newState[action.reviewId];
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;