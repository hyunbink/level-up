import React from "react";
import './user_page.scss';
import { BsFillCheckCircleFill } from 'react-icons/bs'


import BookingsForm from '../bookings/booking_form_container'
import BookingShow from "../bookings/bookings_show_container";

import ReviewFormContainer from "../review/review_form_container";
import ReviewItemContainer from "../review/review_item_container";

import shoe from "../carousel/shoe_dye.png";
import kendo from "../carousel/kendo.jpg";
import shrimp from "../carousel/shrimp2.png";
import drone from "../carousel/drone3.jpg";

import VideoIndexItem from "../video/video_index_item";

class UserPage extends React.Component {
    constructor(props){
        super(props);
        this.getUserBookings = this.getUserBookings.bind(this);
        this.deleteSelectedBooking = this.deleteSelectedBooking.bind(this);
        this.getUserReviews = this.getUserReviews.bind(this);
        this.getVids = this.getVids.bind(this);
    }


    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchUser(this.props.match.params.id)
            .then(()=> this.props.fetchReviews(this.props.match.params.id))
            .then(()=> this.props.fetchBookings(this.props.match.params.id))
            .then(()=> this.props.fetchVideosByUser(this.props.match.params.id))
    }

    deleteSelectedBooking(bookingId){
        this.props.deleteBooking(bookingId)
            .then(this.props.fetchBookings(this.props))

    }

    getUserReviews() {
        this.props.fetchReviews(this.props.match.params.id);
    }

    getUserBookings() {
        this.props.fetchBookings(this.props.match.params.id);
    }

    getVids(){
        if (this.props.videos.data && this.props.user.professional === true) {
            if (typeof this.props.videos.data === 'object') {
                let arr = Object.values(this.props.videos.data);
                return arr.map((vid,i)=><VideoIndexItem 
                formType="user-show" key={`vid-${i}`} video={vid}/>)
            } else {
                return this.props.videos.data.map((vid,i)=><VideoIndexItem 
                formType="user-show" key={`vid-${i}`} video={vid}/>)
            }
        }
    }
// going from category to video -- does not like this.props.videos.map
    render() {
        
        if (!this.props.user) {
            return null;
        }
        if (this.props.user.professional && !this.props.reviews) {
            return null;
        }
        return (
            <div className="user-page">
                <div className="user-container">
                    <div className="user-show-banner">
                            <img className="user-show-banner-img" src={shrimp} alt="user-show-banner-img"></img>
                            
                    </div>
                    <div className="user-show-info-div">
                        <div className="user-show-info-div-left">
                                {/* <div className="user-info"> */}
                                    <div className="user-essential">
                                        {/*  */}<div className="user-photo-">
                                <img className="user-show-profile-photo" alt="user-profile" src={this.props.user.photoUrl}></img>
                            </div>
                                        <div className="space-for-photo"></div>
                                        <span className="user-show-full-name"> {this.props.user.firstName} {this.props.user.lastName} </span>
                                        <span>{this.props.user.professional ? <BsFillCheckCircleFill className="user-show-prof-icon" />: <div></div> }</span>
                                        <p></p>
                                        <br/>
                                        <h2>About: </h2>
                                        <div className="line-breaks"></div>
                                        <p>{this.props.user.bio}</p>
                                        <br/>
                                        {this.props.user.interests ? <h1 className="user-show-ints">Interests: <ul className="user-show-interests-list">{this.props.user.interests.split(",").map((int, i)=>(
                                            <li key={`interest-${i}`} className="user-show-interest">{int}</li>
                                        ))}</ul></h1> : <div></div>}
                                        {this.props.user.categories ? <h1 className="user-show-ints">Expert in Categories: <ul className="user-show-interests-list">{this.props.user.categories.split(",").map((int, i)=>(
                                            <li key={`cat-${i}`} className="user-show-interest">{int}</li>
                                        ))}</ul></h1> : <div></div>}
                                            <div className="user-show-bookings" >
                                                {this.props.user.professional && this.props.currentUserId !== this.props.user._id ? <BookingsForm 
                                                getUserBookings={this.getUserBookings} 
                                                className='user-show-bookings-form' 
                                                bookee={this.props.user} 
                                                booker={this.props.currentUser}
                                                /> : <div></div> }
                                                <div className="user-show-bookings-div">
                                                    <ul className="user-show-bookings-ul">
                                                        {/* make sure bookings only show if they assoicated with it, user and prof */}
                                                        {/* {this.props.bookings.data  ?  : <div></div> } */}
                                                        {this.props.bookings.data && this.props.currentUserId === this.props.user._id ? <ul>
                                                            <div>Scheduled Bookings:</div>
                                                            {this.props.bookings.data.map((booking, idx)=> (
                                                            <li><BookingShow key={idx} booking={booking} getBookings={this.getUserBookings}/></li>
                                                            )
                                                        )} </ul> : <div></div> }
                                                    </ul>
                                                </div>
                                            </div>
                        </div>
                            </div>
                                <div className="user-show-info-div-right">
                                    <div className="user-details">
                                        {this.props.user.professional? 
                                        <ul> 
                                            {this.props.videos.data ? this.getVids() : <div></div>}
                                        </ul>
                                        : <div></div> }
                                    
                                    </div>
                                </div>
                    <div className="user-reviews-container">
                            <h1 className="reviews-title" >Reviews</h1>
                        <div className="create-review-form">
                            <ReviewFormContainer reviewer={this.props.currentUser} reviewee={this.props.user} getReviews={this.getUserReviews}/>
                        </div>
                        <div className="review-data-cont">
                            {this.props.reviews.data ? <ul className="review-item-show">{this.props.reviews.data.map((review, idx)=> (
                                <ReviewItemContainer key={idx} review={review} getReviews={this.getUserReviews}/>
                                )
                                )} </ul> : <div></div> }
                        </div>
                                
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default UserPage;