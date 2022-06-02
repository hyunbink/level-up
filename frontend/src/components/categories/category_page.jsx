import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from "../nav/navbar_container";
import VideoIndexContainer from "../video/video_index/video_index_container";

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
        console.log("typeof category", typeof category);
        let words;
        if (category.includes("-")) {
            words = category.split("-")
        } else {
            words = category.split("-")
        }
        return words.map(word => (this.capitalize(word))).join(" ");
    }

    render() {
        return(
                <div className="category-page">
                    <div className="video-index-header">
                        <img src=""/>
                        <h1>{this.formatCategoryName()}</h1>
                    </div>
                    <VideoIndexContainer category={this.props.category}/>
                </div>
        )
    }
}

export default CategoryPage;