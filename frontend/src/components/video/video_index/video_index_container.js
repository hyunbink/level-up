import { connect } from "react-redux";
import VideoIndex from "./video_index"
import { fetchAllVideos, fetchVideosByCategory, fetchVideosByUser } from "../../../actions/video_actions"
import { openModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    videos: state.entities.videos.data,
});

const mDTP = (dispatch, ownProps) => ({
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchVideosByUser: userId => dispatch(fetchVideosByUser(userId)),
    fetchVideosByCategory: category => dispatch(fetchVideosByCategory(category)),
    openModal: formType => dispatch(openModal(formType)),
});

export default connect(mSTP, mDTP)(VideoIndex);