import React from "react";
import NavbarContainer from "../nav/navbar_container";
import { FaStar } from 'react-icons/fa'
import "./review.css";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
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
        this.revStars = this.revStars.bind(this);
        this.handleReviewErrors = this.handleReviewErrors.bind(this);
    }

    componentDidMount() {
        this.props.clearReviewErrors();
    }

    componentWillUnmount() {
        this.props.clearReviewErrors();
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
        this.props.updateReview(newReview)
            .then(()=>this.props.getReviews());
    }

    handleReviewErrors() {
        if (this.props.errors.length === 0) {
            return null;
        } else {
            window.scrollTo(0,0);
            return <ul>{this.props.errors.map((error,idx) =>(
                <li key={idx}>{error}</li>
            ))}</ul>
        } 
    }

    revStars(num){
        if (num === 1) return <div className="rev-show-stars"><FaStar/></div>;
        if (num === 2) return <div className="rev-show-stars"><FaStar/><FaStar/></div>;
        if (num === 3) return <div className="rev-show-stars"><FaStar/><FaStar/><FaStar/></div>;
        if (num === 4) return <div className="rev-show-stars"><FaStar/><FaStar/><FaStar/><FaStar/></div>;
        if (num === 5) return <div className="rev-show-stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>;
    }

    render() {
        return(
        
            <div>
                {this.props.currentUserId && this.props.currentUserId === this.props.review.reviewerId ? 
                    <div className="edit-rev-form-div">
                        <button className="user-show-buttons" onClick={this.edit} >Edit Review</button>
                        <button className="user-show-buttons" onClick={()=>this.props.deleteReview(this.props.review._id).then(()=>this.props.getReviews())}>Delete Review</button>
                    </div> 
                    :
                    <div></div>
                }
                {this.handleReviewErrors()}
                {this.state.editing ? 
                        
                        <form onSubmit={this.handleSubmit}>
                            <div className="edit-rev-form-div">
                            <label> Title
                                <input type="text" value={this.state.title} onChange={this.update("title")}/>
                            </label>
                            <label> Body 
                                <input type="text" value={this.state.text} onChange={this.update("text")} />
                            </label>
                            <label> Stars 
                                <input type="number" min="1" max="5" value={this.state.score} onChange={this.update("score")}/>
                            </label>
                            {/* <div className="star-wrapper">
                                <input onChange={this.update("score")} type="checkbox" className="star" id="oneLocation" value={5}/>
                                <label htmlFor="oneLocation" className="fas fa-star s1"><FaStar/></label>
                                <input onChange={this.update("score")} type="checkbox" className="star" id="twoLocation" value={4}/>
                                <label htmlFor="twoLocation" className="fas fa-star s2"><FaStar/></label>
                                <input onChange={this.update("score")} type="checkbox" className="star" id="threeLocation" value={3}/>
                                <label htmlFor="threeLocation" className="fas fa-star s3"><FaStar/></label>
                                <input onChange={this.update("score")} type="checkbox" className="star" id="fourLocation" value={2}/>
                                <label htmlFor="fourLocation" className="fas fa-star s4"><FaStar/></label>
                                <input onChange={this.update("score")} type="checkbox" className="star" id="fiveLocation" value={1}/>
                                <label htmlFor="fiveLocation" className="fas fa-star s5"><FaStar/></label>
                            </div> */}
                            <button className="user-show-buttons">Edit Review</button>
                    </div>
                        </form>
                :
                    <div className="rev-item-container">

                        <div className="rev-item-title">{this.props.review.title}</div>
                        {/* <div>{this.props.review.score}</div> */}
                        {this.revStars(this.props.review.score)}
                        <div className="rev-item-text">{this.props.review.text}</div>
                    </div>
                }
            </div>
        );
    }

}

export default ReviewItem;