import React from "react";
import NavbarContainer from "../nav/navbar_container";
import "./review.css";
import { FaStar } from 'react-icons/fa'

//receives current user and user profile user
class CreateReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            score: -1,
            reviewerId: this.props.reviewerId,
            revieweeId: this.props.revieweeId
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReviewErrors = this.handleReviewErrors.bind(this);
    }

    componentDidMount() {
        this.props.clearReviewErrors();
    }

    componentWillUnmount() {
        this.props.clearReviewErrors();
    }

    
    handleReviewErrors() {
        // if (this.props.errors.length === 0) {
        //     return null;
        // } else {
            // window.scrollTo(0,0);
            return <ul id="review-form-errors" className="hidden">{this.props.errors.map((error,idx) =>(
                <li key={idx}>{error}</li>
            ))}</ul>
        // } 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let reviewFormErrors = document.getElementById("review-form-errors") ;
        console.log("reviewform", reviewFormErrors);
        reviewFormErrors.classList.remove("hidden");
        document.addEventListener("click", ()=> {
            reviewFormErrors.classList.add("hidden");
            document.removeEventListener("click", ()=> {});
        });

        let newReview = this.state;
        this.props.createReview(newReview)
            .then(()=>this.props.getReviews());
    }

    render() {
        return(
                <div className="new-rev-container">
                    {this.handleReviewErrors()} 
                    <form onSubmit={this.handleSubmit}>
                        {/* <label> Title
                        </label> */}
                            <input placeholder="Review Title" type="text" value={this.state.title} onChange={this.update("title")}/>
                        {/* <label> Score 
                            <input type="number" value={this.state.score} onChange={this.update("score")}/>
                        </label> */}
                        {/* <label> Text 
                        </label> */}
                            <textarea placeholder="Write your review here"  value={this.state.text} onChange={this.update("text")} />
                        <div className="star-wrapper">
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
                        </div>
                        <button className="user-show-buttons">Post Review</button>
                    </form>
                </div>
        );
    }
}

export default CreateReviewForm;