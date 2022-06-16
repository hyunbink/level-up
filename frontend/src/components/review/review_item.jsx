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

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

        
    handleReviewErrors() {
        // if (this.props.errors.length === 0) {
        //     return null;
        // } else {
            // window.scrollTo(0,0);
            return <ul id="review-edit-errors" className="hidden">{this.props.errors.map((error,idx) =>(
                <li key={idx}>{error}</li>
            ))}</ul>
        // } 
    }

    edit() {
        this.setState({editing: !this.state.editing, 
            title: this.props.review.title,
            reviewerId: this.props.review.reviewerId,
            revieweeId: this.props.review.revieweeId,
            score: this.props.review.score,
            text: this.props.review.text});
    }   


    handleSubmit(e) {
        e.preventDefault();

        let reviewFormErrors = document.getElementById("review-form-errors");
        reviewFormErrors.classList.add("hidden");
        
        
        let newReview = this.props.review;
        newReview["title"] = this.state.title;
        newReview["score"] = this.state.score;
        newReview["text"] = this.state.text;
        // if (!newReview["title"] || !newReview["text"]) {
        //     return;
        // }
        // this.setState({editing:false});
        // this.props.updateReview(newReview);

        const submit = async ()=> {
            await this.props.updateReview(newReview);
            if (this.props.errors.length > 0) {
                this.setState({editing: true});
                let reviewEditErrors = document.getElementById("review-edit-errors") ;
                reviewEditErrors.classList.remove("hidden");
                document.addEventListener("click", ()=> {
                reviewEditErrors.classList.add("hidden");
                document.removeEventListener("click", ()=> {});
        });
            } else {
                this.props.getReviews();
                this.setState({editing:false});
            }
        }

        submit();

        // let reviewEditErrors = document.getElementById("review-edit-errors") ;
        // reviewEditErrors.classList.remove("hidden");
        
        // document.addEventListener("click", ()=> {
        //     reviewEditErrors.classList.add("hidden");
        //     document.removeEventListener("click", ()=> {});
        // });

        // this.props.updateReview(newReview)
        // .then(()=>this.props.getReviews());
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
                {/* {this.props.errors ? this.edit() : null} */}
                {this.handleReviewErrors()}
                {this.state.editing ? 
                    <form onSubmit={this.handleSubmit}>
                        <div className="edit-rev-form-div">
                            <label className="edit-rev-label"> Title:
                            </label>
                                <input className="edit-rev-text" type="text" value={this.state.title} onChange={this.update("title")}/>
                            <label> Body: 
                            </label>
                                <textarea className="edit-rev-text" type="text" value={this.state.text} onChange={this.update("text")} />
                            <label> Stars: 
                            </label>
                            <div className="edit-star-wrapper">
                                <input onChange={this.update("score")} type="checkbox" className="edit-star" id="oneLocation1" value={5}/>
                                <label htmlFor="oneLocation1" className="fas fa-star s1"><FaStar/></label>
                                <input onChange={this.update("score")} type="checkbox" className="edit-star" id="twoLocation2" value={4}/>
                                <label htmlFor="twoLocation2" className="fas fa-star s2"><FaStar/></label>
                                <input onChange={this.update("score")} type="checkbox" className="edit-star" id="threeLocation3" value={3}/>
                                <label htmlFor="threeLocation3" className="fas fa-star s3"><FaStar/></label>
                                <input onChange={this.update("score")} type="checkbox" className="edit-star" id="fourLocation4" value={2}/>
                                <label htmlFor="fourLocation4" className="fas fa-star s4"><FaStar/></label>
                                <input onChange={this.update("score")} type="checkbox" className="edit-star" id="fiveLocation5" value={1}/>
                                <label htmlFor="fiveLocation5" className="fas fa-star s5"><FaStar/></label>
                            </div>
                            <button className="user-show-large-buttons">Confirm Edit</button>
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
                {this.props.currentUserId && this.props.currentUserId === this.props.review.reviewerId ? 
                    this.state.editing ? 
                        <div></div> : 
                        <div className="edit-rev-form-div">
                        <button className="user-show-buttons" onClick={this.edit} >Edit</button>
                        <div className="rev-container-div"></div>
                        <button className="user-show-buttons" onClick={()=>this.props.deleteReview(this.props.review._id).then(()=>this.props.getReviews())}>Delete</button>
                    </div> 
                    :
                    <div></div>
                }
            </div>
        );
    }

}

export default ReviewItem;