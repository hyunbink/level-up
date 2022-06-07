import { connect } from "react-redux";
import VideoIndex from "./video_index";
import { fetchAllVideos, fetchVideosByCategory, fetchVideosByUser, fetchVideosByTopic} from "../../../actions/video_actions";
import { fetchUser } from "../../../actions/user_actions";
import { openModal } from "../../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    videos: state.entities.videos.data,
});

const mDTP = (dispatch, ownProps) => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchVideosByUser: userId => dispatch(fetchVideosByUser(userId)),
    fetchVideosByTopic: topic => dispatch(fetchVideosByTopic(topic)),
    fetchVideosByCategory: category => dispatch(fetchVideosByCategory(category)),
    openModal: formType => dispatch(openModal(formType)),
});

export default connect(mSTP, mDTP)(VideoIndex);