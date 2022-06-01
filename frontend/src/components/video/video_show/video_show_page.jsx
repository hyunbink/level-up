import React from "react";

class VideoShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            video: {},
            user: {}
        }
    }

    componentDidMount() {
        let video;
        this.props.fetchVideo(this.props.match.params.videoId)
            .then(action => video = action.video.data[this.props.match.params.videoId])
            .then(() => this.setState({video: video}))
            .then(() => this.props.fetchUser(video.uploaderId))
            .then(action => this.setState({user: action.user.data[0]}))
    }

    render() {

        if (!this.state.video) {return null}
        console.log(this.state)
        return(
            <div className="video-show-page">
                <iframe
                    width="560"
                    height="315"
                    src={this.state.video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
                <h1>{this.state.video.title}</h1>
                <p>{this.state.video.description}</p>
                <div className="video-uploader">
                    <img src="" alt="" />
                    <h3>{this.state.user.firstName} {this.state.user.lastName}</h3>
                </div>
            </div>
        )
    }
}

export default VideoShow;
