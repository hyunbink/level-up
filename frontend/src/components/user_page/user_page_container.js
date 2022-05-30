import UserPage from "./user_page";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    fetchUsers: ()=> dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(mSTP,mDTP)(UserPage);