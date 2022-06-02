import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { deleteBooking } from '../../actions/booking_actions';
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    return ({
        bookeeId: ownProps.bookee._id,
        bookerId: ownProps.booker.id
    })
};

const mDTP = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    deleteBooking: bookingId => dispatch(deleteBooking(bookingId)),
})

export default withRouter(connect(mSTP, mDTP)(BookingForm));