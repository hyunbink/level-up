import { connect } from "react-redux";
import { deleteReview, updateReview } from "../../actions/review_actions";
import ReviewItem from "./review_item";

const mSTP = (state, ownProps) => {
    let curUserId;
    if (state.session.user) {
        curUserId = state.session.user.id
    }
    return {
    currentUserId: curUserId
}};

const mDTP = dispatch => ({
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    updateReview: review => dispatch(updateReview(review))
});

export default connect(mSTP, mDTP)(ReviewItem);