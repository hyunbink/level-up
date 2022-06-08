import { CLEAR_VIDEOS, RECEIVE_VIDEO, RECEIVE_VIDEOS, REMOVE_VIDEO } from "../actions/video_actions";

const videosReducer = ( state = {}, action ) => {
    if (action.videos) {
        console.log("action data", Object.values(action.videos.data).length);
    }
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_VIDEOS:
            return Object.assign({}, action.videos);
        case RECEIVE_VIDEO:
            if (!action.video.data[0]) {
                return Object.assign({}, state, { [action.video.data._id]: action.video.data });
            }
            return Object.assign({}, state, { [action.video.data[0]._id]: action.video.data[0] });
        case REMOVE_VIDEO:
            let newState = Object.assign({}, state);
            delete newState[action.videoId];
            return newState;
        case CLEAR_VIDEOS:
            return {}
        default:
            return state;
    }
}

export default videosReducer;