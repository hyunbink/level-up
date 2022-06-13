import { connect } from "react-redux"
import { sendChat, sendChatUser } from "../../actions/livechat_actions";
import LiveChat from "./live-chat"

const mSTP = state => ({
    livechat: state.livechat,
    user: state.entities.users.data[0]
})

const mDTP = dispatch => ({
    sendChat: chat => dispatch(sendChat(chat)),
    sendChatUser: user => dispatch(sendChatUser(user))
})

export default connect(mSTP, mDTP)(LiveChat); 