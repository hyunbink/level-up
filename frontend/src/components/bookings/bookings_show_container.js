import { connect } from 'react-redux';
import BookingsShow from './bookings_show';
import { fetchBookings, deleteBooking, updateBooking } from '../../actions/booking_actions';
// import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom'

const mSTP = (state, ownProps) => {
    let loggedUserId;
    if (state.session.user)
    return ({
        currentUserId: loggedUserId
    })
};

const mDTP = dispatch => ({
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
    updateBooking: booking => dispatch(updateBooking(booking))
    // closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(BookingsShow));



