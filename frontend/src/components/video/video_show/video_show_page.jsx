import React from "react";
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
                <div className="video-buttons">
                    <button onClick={this.deleteThisVideo}>Delete Video</button>
                    <Link to={`/video/edit/${this.state.video._id}`}><button>Edit Video</button></Link>
                </div>
            )
        }
    }

    render() {
        if (!this.state.video || !this.state.user) {return null}
        return(
            <div className="video-show-page">
                <div className="video-show-wrapper">
                    {/* <iframe
                        controls
                        autoPlay
                        width="560"
                        height="315"
                        src={this.state.video.url}
                        allowFullScreen
                    >
                    </iframe> */}
                    <video 
                        // width="400" 
                        controls
                        src={this.state.video.url}
                        // <source src="mov_bbb.mp4" type="video/mp4">
                        // <source src="mov_bbb.ogg" type="video/ogg">
                        // Your browser does not support HTML video.
                    />
                    <div className="vid-show-title">
                        <div className="vid-show-title-text">
                            {this.state.video.title}
                        </div>
                    </div>
                    <div className="vid-show-user">
                        {/* <div className="vid-show-info">   */}
                            <Link to={`/user/${this.state.user._id}`} style={{textDecoration: 'none'}}> 
                                <div>
                                    <span className="vid-info-icon"><HiOutlineUserCircle /></span> {this.state.user.firstName} {this.state.user.lastName}
                                </div>
                            </Link>
                            
                        {/* </div> */}
                    </div>
                    {this.renderEditPage()}
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
