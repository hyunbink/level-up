import { OPEN_MODAL } from "../actions/modal_actions";

export default (state={}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            return action.videoId;
        default:
            return state;
    }
}