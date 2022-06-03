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
    }

    update(field) {
        console.log('update,state', this.state)
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let newReview = this.state;
        this.props.createReview(newReview)
            .then(()=>this.props.getReviews());
    }

    render() {
        return(
                <div className="new-rev-container">
                    <form onSubmit={this.handleSubmit}>
                        <label> Title
                            <input type="text" value={this.state.title} onChange={this.update("title")}/>
                        </label>
                        {/* <label> Score 
                            <input type="number" value={this.state.score} onChange={this.update("score")}/>
                        </label> */}
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
                        <label> Text 
                            <input type="text" value={this.state.text} onChange={this.update("text")} />
                        </label>
                        <button>Post Review</button>
                    </form>
                </div>
        );
    }
}

export default CreateReviewForm;