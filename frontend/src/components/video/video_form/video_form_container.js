import { connect } from "mongoose";
import VideoForm from "./video_form"

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.user.id,
});

const mDTP = (dispatch, ownProps) => ({
    
});

export default connect(mSTP, mDTP)(VideoForm);