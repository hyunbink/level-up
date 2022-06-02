const { RECEIVE_REVIEWS, RECEIVE_REVIEW} = require("../actions/review_actions");

const reviewsReducer = (state ={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_REVIEWS:
            return Object.assign({}, state, action.reviews);
        case RECEIVE_REVIEW:
            if (!action.review.data[0]) {
                return Object.assign({}, state, {[action.review.data._id]: action.review.data});
            }
            return Object.assign({}, state, {[action.review.data[0]._id]: action.review.data[0]});
        // case REMOVE_REVIEW:
        //     let newState = Object.assign({}, state);
        //     delete newState[action.reviewId];
        //     return newState;
        default:
            return state;
    }
}

export default reviewsReducer;