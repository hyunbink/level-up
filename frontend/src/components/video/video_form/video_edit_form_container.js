import { connect } from "react-redux";
import VideoEditForm from "./video_edit_form"
import { updateVideo, deleteVideo } from "../../../actions/video_actions";

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.user.id,
});

const mDTP = (dispatch, ownProps) => ({
    updateVideo: video => dispatch(updateVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
});

export default connect(mSTP, mDTP)(VideoEditForm);