const { RECEIVE_CHAT_USER} = require("../actions/livechat_actions");

const liveChatReducer = (state ={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CHAT_USER:
            return Object.assign({}, {chatUser: action.chatUser});
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