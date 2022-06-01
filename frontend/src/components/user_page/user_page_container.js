import UserPage from "./user_page";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { fetchReviews } from "../../actions/review_actions";

const mSTP = (state, ownProps) => {
    console.log("user-page-state", state)
    console.log("user-page-ownProps", ownProps)
    return {

        reviews: state.entities.reviews,
        user: state.entities.users[ownProps.match.params.id],
        currentUser: state.session.user

}};

const mDTP = dispatch => ({
    fetchReviews: userId => dispatch(fetchReviews(userId)),
    fetchUsers: ()=> dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP,mDTP)(UserPage);