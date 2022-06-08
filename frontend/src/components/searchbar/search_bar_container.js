import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { clearVideos, searchVideoByTopic } from "../../actions/video_actions";
import SearchBar from "./search_bar";

// const mSTP = (state, ownProps) => ({

// });


const mDTP = dispatch => ({
    search: query => dispatch(searchVideoByTopic(query)),
    clearVideos: ()=> dispatch(clearVideos())
});

export default withRouter(connect(null, mDTP)(SearchBar));

