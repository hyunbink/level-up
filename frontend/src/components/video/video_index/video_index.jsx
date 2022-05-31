import React from "react";
import VideoIndexItem from "../video_index_item";
import { Link } from "react-router-dom";

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
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
        let prevPage;
        if (this.props.userId) {
            prevPage = "user"
        } else if (this.props.category) {
            prevPage = "category"
        }
        return (
            <div className="video-index-page">
                <div className="video-index-container">
                    <div className="video-index-header">
                        <img src=""/>
                        <h1>{this.formatCategoryName()}</h1>

                    </div>
                    <ul className="video-list">
                        {
                            this.props.videos.map((video, idx) => (
                                <VideoIndexItem
                                    prevPage={prevPage}
                                    video={video}
                                    key={`video-${idx}`}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default VideoIndex;