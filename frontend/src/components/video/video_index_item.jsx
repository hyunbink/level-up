import React from "react";
import { Link } from "react-router-dom";

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.video.uploaderId);
        this.setState({user: this.props.users[this.props.video.uploaderId]});
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    formatCategoryName() {
        let category = this.props.video.category;
        let words;
        if (category.includes("-")){
            words = category.split("-");
        } else {
            words = category;
        }
        if (typeof words !== String) {
            return words.map(word => (this.capitalize(word))).join(" ");
        } else {
            return this.capitalize(words);
        }
    }

    linkToCategoryOrUser() {
        let component;
        // Check if we are filtering by user or category
        if (this.props.prevPage === "category") {
            component = 
                <Link to={`/category/${this.props.video.category}`}>
                    {this.formatCategoryName()}
                </Link>
        } else if (this.props.prevPage === "user") {
            component = 
                <Link to={`/users/${this.props.video.uploaderId}`}>
                    {this.capitalize(this.state.user.firstName)} {this.capitalize(this.state.user.lastName)}
                </Link>
        }
        return component;
    }

    render() {
        return (
            <Link to={`/video/${this.props.video.id}`}><li className="video-index-item">
                <video src=""></video>
                <h1>{this.props.video.title}</h1>
                <p className="uploader-or-category-name">{this.linkToCategoryOrUser()}</p>
            </li></Link>
        )
    }
}

export default VideoIndexItem;