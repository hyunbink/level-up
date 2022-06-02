import { connect } from "react-redux";
import VideoForm from "./video_form"
import { createVideo, updateVideo, deleteVideo, fetchVideo } from "../../../actions/video_actions";
import { closeModal } from "../../../actions/modal_actions"

const mSTP = (state, ownProps) => {
    if (state.session.user) {
        return ({
            currentUserId: state.session.user.id,
        });
    }
}

const mDTP = (dispatch, ownProps) => ({
    fetchVideo: video => dispatch(fetchVideo(video)),
    createVideo: video => dispatch(createVideo(video)),
    updateVideo: video => dispatch(updateVideo(video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(VideoForm);