import { fetchUser } from "../../actions/user_actions";
import { fetchAllVideos } from "../../actions/video_actions";
import SearchResults from "./search_results";
import { connect } from "react-redux";


const mSTP = (state, ownProps) => ({
    videos: state.entities.videos.data
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchAllVideos: ()=> dispatch(fetchAllVideos())
});

export default connect(mSTP, mDTP)(SearchResults);