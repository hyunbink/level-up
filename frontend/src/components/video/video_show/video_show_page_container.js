import { connect } from "react-redux";
import { fetchVideo, fetchVideosByCategory, fetchVideosByUser } from "../../../actions/video_actions";
import { fetchUser } from "../../../util/user_api_util";
import VideoShow from "./video_show_page"

const mSTP = (state, ownProps) => ({
    video: state.entities.videos.data[ownProps.match.params.videoId],
    users: state.entities.users.data,
});

const mDTP = (dispatch, ownProps) => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchVideosByUser: userId => dispatch(fetchVideosByUser(userId)),
    fetchVideosByCategory: category => dispatch(fetchVideosByCategory(category)),
});

export default connect(mSTP, mDTP)(VideoShow);