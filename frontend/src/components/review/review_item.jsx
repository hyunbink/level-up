import React from "react";

class ReviewItem extends React.Component {

    render() {
        return(
            <div className="rev-item-container">
                <div className="rev-item-title">{this.props.review.title}</div>
                <div>{this.props.review.score}</div>
                <div className="rev-item-text">{this.props.review.text}</div>
            </div>
        );
    }

}

export default ReviewItem;