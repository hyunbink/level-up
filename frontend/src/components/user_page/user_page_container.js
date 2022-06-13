import UserPage from "./user_page";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { fetchVideosByUser } from "../../actions/video_actions";
import { createBooking, fetchBookings, fetchBooking } from "../../actions/booking_actions";
import { deleteBooking } from "../../actions/booking_actions";
import { withRouter } from 'react-router-dom';

import { fetchReviews } from "../../actions/review_actions";


const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.id],
        currentUserId: state.session.user.id,
        bookings: state.entities.bookings,
        reviews: state.entities.reviews,
        currentUser: state.session.user,
        videos: state.entities.videos
}};



const mDTP = dispatch => ({
    fetchReviews: userId => dispatch(fetchReviews(userId)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchUsers: ()=> dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchBookings: (userId) => dispatch(fetchBookings(userId)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    fetchVideosByUser: userId => dispatch(fetchVideosByUser(userId))
});

export default withRouter(connect(mSTP,mDTP)(UserPage));