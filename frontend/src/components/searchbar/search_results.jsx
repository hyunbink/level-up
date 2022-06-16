import React from "react";
import { Link } from "react-router-dom";
import VideoIndexItem from "../video/video_index_item";
import empty from "./empty.png"

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.renderSearch = this.renderSearch.bind(this);
    }
    
    renderSearch() {
        if (this.props.videos.length < 1) {
            console.log("hit the no videos ", this.props.videos)
            return (
                <div className="empty-search-container">
                    <Link to="/home">
                        <img src={empty} alt="" />
                    </Link>
                </div>
            )
        }        
    }
    
    render() {
        return(
            <div className="vid-list-wrapper">
                    { this.renderSearch() }
                <ul className="video-list">
                {
                    this.props.videos.map((video, idx) => {
                        return (
                            <VideoIndexItem
                            fetchUser={this.props.fetchUser}
                            prevPage={"topic"}
                            video={video}
                            key={`video-${idx}`}
                            />
                            ) 
                        })
                }    
                </ul>

            </div>
        );
    }
}

export default SearchResults;