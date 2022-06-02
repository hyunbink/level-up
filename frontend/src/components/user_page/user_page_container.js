import UserPage from "./user_page";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";

import { createBooking, fetchBookings } from "../../actions/booking_actions";
import { deleteBooking } from "../../actions/booking_actions";
import { withRouter } from 'react-router-dom';

import { fetchReviews } from "../../actions/review_actions";


const mSTP = (state, ownProps) => {

    let bookingsArr;
    if (state.entities.bookings.data) {
        bookingsArr = state.entities.bookings.data.filter(booking => 
            booking.bookingProfId === state.session.user.id ||
            booking.bookingStudId === state.session.user.id 
            );
    }

    return {

    user: state.entities.users[ownProps.match.params.id],
    currentUserId: state.session.user.id,
    bookings: bookingsArr,
    reviews: state.entities.reviews,
    currentUser: state.session.user
}};



const mDTP = dispatch => ({
    fetchReviews: userId => dispatch(fetchReviews(userId)),
    createBooking: booking => dispatch(createBooking(booking)),
    fetchUsers: ()=> dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchBookings: () => dispatch(fetchBookings()),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
});

export default withRouter(connect(mSTP,mDTP)(UserPage));