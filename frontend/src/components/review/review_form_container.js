import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createReview } from "../../actions/review_actions";
import CreateReviewForm from "./review_form";

const mSTP = (state, ownProps) => {
    // console.log("current state", state);
    // console.log("ownprops", ownProps);
    return {
        revieweeId: ownProps.reviewee._id,
        reviewerId: ownProps.reviewer.id
    }

};

const mDTP = dispatch => ({
    createReview: review => dispatch(createReview(review))
})

export default withRouter(connect(mSTP, mDTP)(CreateReviewForm));