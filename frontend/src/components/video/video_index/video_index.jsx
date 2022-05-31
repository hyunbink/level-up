import React from "react";
import VideoIndexItem from "../video_index_item";
import { Link } from "react-router-dom";

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let prevPage;
        if (this.props.userId) {
            prevPage = "user"
        } else if (this.props.category) {
            prevPage = "category"
        }
        return (
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
        )
    }
}

export default VideoIndex;