import { combineReducers } from "redux";
import modal from "./modal_reducer";
import videoId from "./ui_video_reducer";

export default combineReducers({
    modal,
    videoId
});