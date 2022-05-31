import React from "react";

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    formatCategoryName() {
        let category = this.props.category;
        let words = category.split("-")
        return words.map(word => (this.capitalize(word))).join(" ");
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
                    {this.capitalize(this.props.user.firstName)} {this.capitalize(this.props.user.lastName)}
                </Link>
        }
        return component;
    }

    render() {
        return (
            <li className="video-index-item">
                <video src=""></video>
                <h1>{this.props.video.title}</h1>
                <p className="uploader-or-category-name">{this.linkToCategoryOrUser()}</p>
            </li>
        )
    }
}

export default VideoIndexItem;