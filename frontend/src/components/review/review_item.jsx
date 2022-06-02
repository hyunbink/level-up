import React from "react";
import "./review.css";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        console.log("reviewitemprops", this.props)
        this.state = {
            editing: false,
            title: this.props.review.title,
            reviewerId: this.props.review.reviewerId,
            revieweeId: this.props.review.revieweeId,
            score: this.props.review.score,
            text: this.props.review.text
        }
        this.edit = this.edit.bind(this);
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    edit() {
        this.setState({editing: !this.state.editing})
    }

    handleSubmit(e) {
        e.preventDefault();
        let newReview = this.props.review;
        newReview["title"] = this.state.title;
        newReview["score"] = this.state.score;
        newReview["text"] = this.state.text;
        this.setState({editing:false});
        console.log("new review", newReview);
        this.props.updateReview(newReview)
            .then(()=>this.props.getReviews());
    }

    render() {
        return(
            <div>
                {this.props.currentUserId && this.props.currentUserId === this.props.review.reviewerId ? 
                    <div>
                        <button onClick={this.edit} >Edit this Review</button>
                        <button onClick={()=>this.props.deleteReview(this.props.review._id).then(()=>this.props.getReviews())}>Delete this Review</button>
                    </div> 
                    :
                    <div></div>
                }
                {this.state.editing ? 
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label> Title
                                <input type="text" value={this.state.title} onChange={this.update("title")}/>
                            </label>
                            <label> Score 
                                <input type="number" value={this.state.score} onChange={this.update("score")}/>
                            </label>
                            <label> Text 
                                <input type="text" value={this.state.text} onChange={this.update("text")} />
                            </label>
                            <button>Edit Review</button>
                        </form>
                    </div>
                :
                    <div className="rev-item-container">
                        <div className="rev-item-title">{this.props.review.title}</div>
                        <div>{this.props.review.score}</div>
                        <div className="rev-item-text">{this.props.review.text}</div>
                    </div>

                }

            </div>
        );
    }

}

export default ReviewItem;