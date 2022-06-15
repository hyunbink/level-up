import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchBookings } from "../../actions/booking_actions";
import BookingsIndex from "./bookings_index";


const mSTP = (state, ownProps) => ({
    bookings: state.entities.bookings,
    currentUser: state.session.user,
    currentUserId: state.session.user.id,
    user: state.entities.users[ownProps.match.params.id],
});

const mDTP = dispatch => ({
    fetchBookings: userId => dispatch(fetchBookings(userId))
});

export default withRouter(connect(mSTP, mDTP)(BookingsIndex));