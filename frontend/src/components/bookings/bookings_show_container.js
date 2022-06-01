import { connect } from 'react-redux';
import BookingsShow from './bookings_show';
import { fetchBookings } from '../../actions/booking_actions';

const mSTP = state => {

    return ({
        // bookings: state.entities.bookings
    })
};

const mDTP = dispatch => ({
    fetchBookings: () => dispatch(fetchBookings()),
})

export default connect(mSTP, mDTP)(BookingsShow);



