import { connect } from "react-redux";
import { clearReviewErrors, deleteReview, updateReview } from "../../actions/review_actions";
import ReviewItem from "./review_item";

const mSTP = (state, ownProps) => {
    let curUserId;
    if (state.session.user) {
        curUserId = state.session.user.id
    }
    return {
        errors: state.errors.reviews,
        currentUserId: curUserId
}};

const mDTP = dispatch => ({
    clearReviewErrors: ()=> dispatch(clearReviewErrors()),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    updateReview: review => dispatch(updateReview(review))
});

export default connect(mSTP, mDTP)(ReviewItem);