import React from 'react';
import ReviewItemContainer from './review_item_container';
import ReviewFormContainer from './review_form_container';

class ReviewIndex extends React.Component{
    constructor(props){
        super(props);
        this.getUserReviews = this.getUserReviews.bind(this);
    }

    componentDidMount(){
        this.props.fetchReviews(this.props.userId)
    }

    getUserReviews() {
        this.props.fetchReviews(this.props.userId);
    }

    render(){

        if (!this.props.reviews) {
            return null
        }
        console.log("in the review index", this.props.reviews)
        return(    
            <div>
                <div className="create-review-form">
                <ReviewFormContainer reviewer={this.props.currentUser} reviewee={this.props.user} getReviews={this.getUserReviews}/>
                </div>
                {this.props.reviews.data ? <ul className="review-item-show">{this.props.reviews.data.reverse().map((review, idx)=> (
                    <ReviewItemContainer key={idx} review={review} getReviews={this.getUserReviews}/>
                ))} </ul> : <div></div> }
            </div>
        )
    }
};

export default ReviewIndex;
