import React from "react";
import VideoIndex from "../video/video_index/video_index";

class CategoryPage extends React.Component {
    constructor(props) {
        super(props);

        this.formatCategoryName = this.formatCategoryName.bind(this);
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    formatCategoryName() {
        let category = this.props.category;
        let words = category.split("-")
        return words.map(word => (this.capitalize(word))).join(" ");
    }

    render() {
        return(
            <div className="category-page">
                <div className="video-index-header">
                    <img src=""/>
                    <h1>{this.formatCategoryName()}</h1>
                </div>
                <VideoIndex/>
            </div>
        )
    }
}

export default CategoryPage;