import { connect } from "react-redux";
import { deleteVideo, fetchVideo, fetchVideosByCategory, fetchVideosByUser, updateVideo } from "../../../actions/video_actions";
import { fetchUser } from "../../../actions/user_actions";
import VideoShow from "./video_show_page"

const mSTP = (state, ownProps) => {
    if (!state.session.user) return null
    return{
    video: state.entities.videos,
    users: state.entities.users,
    currentUserId: state.session.user.id,
}};

const mDTP = (dispatch, ownProps) => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchVideosByUser: userId => dispatch(fetchVideosByUser(userId)),
    fetchVideosByCategory: category => dispatch(fetchVideosByCategory(category)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    updateVideo: video => dispatch(updateVideo(video))
});

export default connect(mSTP, mDTP)(VideoShow);