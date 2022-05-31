import { connect } from "mongoose";
import VideoIndex from "./video_index"
import { fetchAllVideos, fetchVideosByCategory, fetchVideosByUser } from "../../../actions/video_actions"

const mSTP = (state, ownProps) => ({
    videos: state.entities.videos,
    userId: ownProps.match.params.id,
    category: ownProps.match.params.category,
});

const mDTP = (dispatch, ownProps) => ({
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchVideosByUser: userId => dispatch(fetchVideosByUser(userId)),
    fetchVideosByCategory: category => dispatch(fetchVideosByCategory(category)),
});

export default connect(mSTP, mDTP)(VideoIndex);