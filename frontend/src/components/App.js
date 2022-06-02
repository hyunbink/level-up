import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from '../main/main_page';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import UserPageContainer from './user_page/user_page_container';

// import VideoShow from './video/video_show/video_show_page_container';
import VideoForm from './video/video_form/video_form_container';

import ProfAuthFormContainer from './prof_auth/prof_auth_container';
import CategoryPageContainer from './categories/category_page_container';
import VideoShowPageContainer from './video/video_show/video_show_page_container';

import IconsBackground from './icons_background/icons_background';


// import BookingFormContainer from './bookings/booking_form_container';   // add protected routes for bookings after testing
// import BookingShowContainer from './bookings/bookings_show_container';
import css from "../App.css";




const App = () => (
  <div>
    <NavBarContainer />
    <Switch>

        {/* <Route exact path="/bookings" component={BookingShowContainer} />
        <Route exact path="/bookings/create" component={BookingFormContainer} /> */}
        <Route exact path="/background" component={ IconsBackground } />
        <Route exact path="/auth/:id" component={ ProfAuthFormContainer } />
        <ProtectedRoute exact path="/user/:id" component={ UserPageContainer}/>
        {/* Change this to the categories page later */}
        <Route exact path="/category/:category" component={ CategoryPageContainer }/> 
        <Route exact path="/video/upload" component={ VideoForm }/>
        <Route exact path="/video/:videoId" component={ VideoShowPageContainer }/>
        {/* <Route exact path="/home" component={ SplashPage }/> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* Rename this to splash page */}
        <AuthRoute exact path="/" component={MainPage} />

    </Switch>
  </div>
);

export default App;
