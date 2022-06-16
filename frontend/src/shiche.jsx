import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'
// import { signup, login, logout } from './actions/session_actions'
// import { postReview } from "./util/reviews_api_util";
// import { fetchAllVideos, fetchVideo } from "./actions/video_actions";

document.addEventListener("DOMContentLoaded", () => {
    // set up Store
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
            users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // set up Root
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);

    // testing
    // window.store = store;
    // window.getState = store.getState;
    // window.user = {username: 'Sam', password: '123456'}
    // window.signup = signup;
    // window.login = login;
    // window.logout = logout;
    // window.dispatch = store.dispatch;
    // window.postReview = postReview;
    // window.fetchAllVideos = fetchAllVideos;
    // window.fetchVideo = fetchVideo;
});
