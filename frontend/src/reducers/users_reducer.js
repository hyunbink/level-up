import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, action.users);
        case RECEIVE_USER:
            if (!action.user.data[0]){
                console.log("action in if case", action);
                return Object.assign({}, {[action.user.data._id]: action.user.data})
            }
            console.log("action in receiveUser", action);
            return Object.assign({}, {[action.user.data[0]._id]: action.user.data[0]});
        default:
            return state;
    }
}

export default usersReducer;