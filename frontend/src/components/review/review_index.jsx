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

        if (this.props.reviews.length===0) {
            return null
        }

        // debugger;
        console.log("in the review index", this.props.reviews)
        return(    
            <div>
                <div className="create-review-form">
                    <ReviewFormContainer reviewer={this.props.currentUser} reviewee={this.props.user} getReviews={this.getUserReviews}/>
                </div>

                <ul className="review-item-show">
                    {
                        Object.values(this.props.reviews).map((review, idx)=> (
                            <ReviewItemContainer key={idx} review={review} getReviews={this.getUserReviews}/>
                        ))
                    } 
                </ul>
            </div>
        )
    }
};

export default ReviewIndex;
