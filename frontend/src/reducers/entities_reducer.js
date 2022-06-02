import { combineReducers } from "redux";
import reviewsReducer from "./reviews_reducer";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import bookingsReducer from "./bookings_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    bookings: bookingsReducer,
    reviews: reviewsReducer
})

export default entitiesReducer;