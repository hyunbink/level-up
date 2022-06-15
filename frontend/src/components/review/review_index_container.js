import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchReviews } from "../../actions/review_actions";
import ReviewIndex from "./review_index";

const mSTP = (state, ownProps) => {
    return({
        reviews: state.entities.reviews,
        currentUser: state.session.user,
        currentUserId: state.session.user.id,
        user: state.entities.users[ownProps.match.params.id],
    })
};

const mDTP = dispatch => ({
    fetchReviews: userId => dispatch(fetchReviews(userId)),
});

export default withRouter(connect(mSTP, mDTP)(ReviewIndex));