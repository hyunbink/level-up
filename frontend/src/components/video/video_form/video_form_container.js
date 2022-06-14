import { connect } from "react-redux";
import VideoForm from "./video_form"
import { createVideo, updateVideo, deleteVideo, fetchVideo, clearVideosErrors } from "../../../actions/video_actions";
import { closeModal } from "../../../actions/modal_actions"

const mSTP = (state, ownProps) => {
    if (state.session.user) {
        return ({
            errors: state.errors.videos,
            currentUserId: state.session.user.id,
        });
    }
}

const mDTP = (dispatch, ownProps) => ({
    clearVideosErrors: ()=> dispatch(clearVideosErrors()),
    fetchVideo: video => dispatch(fetchVideo(video)),
    createVideo: video => dispatch(createVideo(video)),
    updateVideo: video => dispatch(updateVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(VideoForm);