import { connect } from "react-redux";
import VideoEditForm from "./video_edit_form"
import { updateVideo, deleteVideo, clearVideosErrors } from "../../../actions/video_actions";

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.user.id,
    errors: state.errors.videos
});

const mDTP = (dispatch, ownProps) => ({
    updateVideo: video => dispatch(updateVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    clearVideosErrors: ()=>dispatch(clearVideosErrors())
});

export default connect(mSTP, mDTP)(VideoEditForm);