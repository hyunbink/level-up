const { RECEIVE_CHAT, RECEIVE_CHAT_USER} = require("../actions/livechat_actions");

const liveChatReducer = (state ={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CHAT:
            return Object.assign({}, state, {messages: action.chat});
        case RECEIVE_CHAT_USER:
            return Object.assign({}, state, {chatUser: action.chatUser});
        default:
            return state;
    }
}

export default liveChatReducer;


// state: {
//     liveChat: {
//         chatUsers: {
//             user_id: {
//                 firstName:
//                 lastName:
//                 photoUrl:
//             }
//         }
//     }
// }