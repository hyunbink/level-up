import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearReviews } from '../../actions/review_actions';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
  let curUser;
  if (state.session.user) {
    curUser = state.session.user;
  }
  return {
  loggedIn: state.session.isAuthenticated,
  currentUser: curUser,
}};

const mDTP = dispatch => ({
  logout: ()=> dispatch(logout()),
  clearReviews: () => dispatch(clearReviews())
})

export default withRouter(connect(mapStateToProps, mDTP)(NavBar));