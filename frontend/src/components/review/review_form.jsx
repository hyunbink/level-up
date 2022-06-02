import React from "react";
import NavbarContainer from "../nav/navbar_container";
import "./review.css";

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
                        <label> Score 
                            <input type="number" value={this.state.score} onChange={this.update("score")}/>
                        </label>
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