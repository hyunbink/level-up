import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    console.log("action", action);
    switch(action.type) {
        case RECEIVE_USERS:
            return Object.assign({}, action.users);
        case RECEIVE_USER:
            return Object.assign({}, {[action.user.data[0]._id]: action.user.data[0]});
        default:
            return state;
    }
}

export default usersReducer;