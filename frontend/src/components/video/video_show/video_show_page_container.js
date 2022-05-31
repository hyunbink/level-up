import { connect } from "react-redux";
import { fetchVideo, fetchVideosByCategory, fetchVideosByUser } from "../../../actions/video_actions";
import VideoShow from "./video_show_page"

const mSTP = (state, ownProps) => ({
    videos: state.entities.videos,
    users: state.entities.users,
});

const mDTP = (dispatch, ownProps) => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchVideosByUser: userId => dispatch(fetchVideosByUser(userId)),
    fetchVideosByCategory: category => dispatch(fetchVideosByCategory(category)),
});

export default connect(mSTP, mDTP)(VideoShow);