import { connect } from "react-redux";
import { fetchVideo, fetchVideosByCategory, fetchVideosByUser } from "../../../actions/video_actions";
import { fetchUser } from "../../../actions/user_actions";
import VideoShow from "./video_show_page"

const mSTP = (state, ownProps) => {
    return{
    video: state.entities.videos,
    users: state.entities.users,
}};

const mDTP = (dispatch, ownProps) => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchVideosByUser: userId => dispatch(fetchVideosByUser(userId)),
    fetchVideosByCategory: category => dispatch(fetchVideosByCategory(category)),
});

export default connect(mSTP, mDTP)(VideoShow);