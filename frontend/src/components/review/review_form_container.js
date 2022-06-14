import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearReviewErrors, createReview, fetchReviews } from "../../actions/review_actions";
import CreateReviewForm from "./review_form";

const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.reviews,
        revieweeId: ownProps.reviewee._id,
        reviewerId: ownProps.reviewer.id
    }

};

const mDTP = dispatch => ({
    clearReviewErrors: ()=> dispatch(clearReviewErrors()),
    createReview: review => dispatch(createReview(review)),
    fetchReviews: userId => dispatch(fetchReviews(userId))
})

export default withRouter(connect(mSTP, mDTP)(CreateReviewForm));