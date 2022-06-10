import React from "react";
import VideoEditForm from "../video_form/video_edit_form_container";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import "../video_index/video_index.scss";

class VideoShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            video: {},
            user: {}
        }
        this.deleteThisVideo = this.deleteThisVideo.bind(this);
        this.renderEditPage = this.renderEditPage.bind(this);
    }

    deleteThisVideo() {
        this.props.deleteVideo(this.state.video._id)
            .then(this.props.history.push("/"))
    }

    componentDidMount() {
        let video;
        this.props.fetchVideo(this.props.match.params.videoId)
            .then(action => video = action.video.data[this.props.match.params.videoId])
            .then(() => this.setState({video: video}))
            .then(() => this.props.fetchUser(video.uploaderId))
            .then(action => this.setState({user: action.user.data[0]}))
    }

    renderEditPage() {
        if (this.state.video.uploaderId === this.props.currentUserId) {
            return (
                <>
                    <button onClick={this.deleteThisVideo}>Delete Video</button>
                    <Link to={`/video/edit/${this.state.video._id}`}><button>Edit Video</button></Link>
                </>
            )
        }
    }

    render() {
        if (!this.state.video || !this.state.user) {return null}
        return(
            <div className="video-show-page">
                {/* <div className="vid-show">
                    Other STuff
                </div> */}
                {this.renderEditPage()}
                {/* <VideoEditForm video={this.state.video}/> */}
                {/* <button onClick={() => this.redirectToEdit()}>Edit Video</button> */}
                <div className="video-show-wrapper">
                    <iframe
                        controls
                        autoPlay
                        width="560"
                        height="315"
                        src={this.state.video.url}
                        // title="Video player"
                        // frameBorder="0"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                        {/* <source 
                            // src="movie.mp4" 
                            type="video/mp4"
                        /> */}
                    </iframe>
                    <div className="vid-show-title">
                        <div className="vid-show-title-text">
                            {this.state.video.title}
                        </div>
                    </div>
                    <div className="vid-show-user">
                        <div className="vid-show-info">  
                            <Link to={`/user/${this.state.user._id}`} style={{textDecoration: 'none'}}> 
                            <div>
                                <span className="vid-info-icon"><HiOutlineUserCircle /></span> {this.state.user.firstName} {this.state.user.lastName}
                            </div>
                            </Link>
                            
                        </div>
                    </div>

                </div>
                <div className="vid-desc">
                    <div className="vid-desc-header">
                        About: 
                    </div>
                    {this.state.video.description}
                </div>
            </div>
        )
    }
}

export default VideoShow;
