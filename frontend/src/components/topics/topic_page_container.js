import { connect } from "react-redux";
import TopicPage from "./topic_page";


const mSTP = (state, ownProps) => {
    return {
        topic: ownProps.match.params.topic
}};

export default connect(mSTP,null)(TopicPage);