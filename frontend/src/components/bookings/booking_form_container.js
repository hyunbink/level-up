import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { deleteBooking } from '../../actions/booking_actions';
import { withRouter } from "react-router-dom";


const mSTP = (state, ownProps) => {
    console.log('ownProps', ownProps)
    console.log('state-fromformcont', state)
    // let profs;
    // if (state.entities.users.data) {
    //     profs = state.entities.users.data.filter(user => user.professional && user._id !== state.session.user.id)
    // }
    return ({
        // currentUserId: state.session.user.id,
        // professionals: 
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