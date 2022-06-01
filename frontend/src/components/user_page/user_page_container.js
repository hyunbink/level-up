import UserPage from "./user_page";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { createBooking, fetchBookings } from "../../actions/booking_actions";
import { deleteBooking } from "../../actions/booking_actions";

const mSTP = (state, ownProps) => {
    // console.log("user-page-state", state.entities.bookings.data)
    // console.log("user-page-statesesss", state.session.user.id)
    let bookingsArr;
    if (state.entities.bookings.data) {
        bookingsArr = state.entities.bookings.data.filter(booking => 
            booking.bookingProfId === state.session.user.id ||
            booking.bookingStudId === state.session.user.id 
            );
        // console.log("bookingsArr", bookingsArr)
    }
    // console.log("user-page-ownProps", ownProps);
    // console.log('currentuser', state.entities.user[state.session.user.id])
    // console.log('currentuserid', state.session.user.id)
    return {
    // user: state.entities.users.data[],
    user: state.entities.users[ownProps.match.params.id],
    currentUserId: state.session.user.id,
    bookings: bookingsArr
}};

const mDTP = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking)),
    fetchUsers: ()=> dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchBookings: () => dispatch(fetchBookings()),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
});

export default connect(mSTP,mDTP)(UserPage);