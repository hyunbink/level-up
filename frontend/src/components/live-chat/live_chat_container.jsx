import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { sendChatUser } from "../../actions/livechat_actions";
import LiveChat from "./live-chat"

const mSTP = (state, ownProps) => {
    let path;
    let userId;
    if (ownProps.location.pathname.includes("user")) {
        path = ownProps.location.pathname;
        userId = path.split("/")[2];
    }
    return ({
        chatUser: state.liveChat.chatUser,
        user: state.entities.users[userId]
    })
}

const mDTP = dispatch => ({
    sendChatUser: user => dispatch(sendChatUser(user))
})

export default withRouter(connect(mSTP, mDTP)(LiveChat)); 