import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = state => {
    let profs;
    if (state.entities.users.data) {
        profs = state.entities.users.data.filter(user => user.professional && user._id !== state.session.user.id)
    }
    return ({
        currentUserId: state.session.user.id,
        professionals: profs
    })
};

const mDTP = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking)),
    closeModal: () => dispatch(closeModal()),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(mSTP, mDTP)(BookingForm);