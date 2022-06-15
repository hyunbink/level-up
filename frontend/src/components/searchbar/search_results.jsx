import React from "react";
import VideoIndexItem from "../video/video_index_item";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        this.props.fetchAllVideos();
        
    }

    render() {
        if (!this.props.videos) {
            return null;
        }
        
        return(
            <div className="vid-list-wrapper">
                <ul className="video-list">
                    {
                        Object.values(this.props.videos).map((video, idx) => (
                            <VideoIndexItem
                                fetchUser={this.props.fetchUser}
                                prevPage={"topic"}
                                video={video}
                                key={`video-${idx}`}
                            />
                        ))
                    }
                </ul>

            </div>
        );
    }
}

export default SearchResults;