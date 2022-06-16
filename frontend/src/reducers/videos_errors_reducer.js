import { RECEIVE_VIDEO, RECEIVE_VIDEO_ERRORS, REMOVE_VIDEO_ERRORS } from "../actions/video_actions";


const videosErrorsReducer = (state= [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VIDEO_ERRORS:
            return Object.values(action.errors.response.data);
        case REMOVE_VIDEO_ERRORS:
            return [];
        case RECEIVE_VIDEO:
            return [];
        default:
            return state;
    }
}

export default videosErrorsReducer;