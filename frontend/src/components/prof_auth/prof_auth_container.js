import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import ProfAuthForm from "./prof_auth_form";


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users.data[ownProps.match.params.id]
});

const mDTP = dispatch => ({
    fetchUser: userId=> dispatch(fetchUser(userId)),
    updateUser: user=> dispatch(updateUser(user))
})

export default connect(mSTP, mDTP)(ProfAuthForm);