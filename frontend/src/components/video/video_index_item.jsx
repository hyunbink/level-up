import React from "react";
import { Link } from "react-router-dom";

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
        this.formatCategoryName = this.formatCategoryName.bind(this);
        this.linkToCategoryOrUser = this.linkToCategoryOrUser.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.video.uploaderId)
            .then(user=>this.setState({user: user}));
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
        if (typeof words !== 'string') {
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
        
        // if (!this.props.user) {return null}

        return (
            <Link to={`/video/${this.props.video._id}`}>
                <li className="video-index-item">
                    <iframe width="560" height="315" src={this.props.video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h1>{this.props.video.title}</h1>
                    <p className="uploader-or-category-name">{this.linkToCategoryOrUser()}</p>
                </li>
            </Link>
        )
    }
}

export default VideoIndexItem;