import React from "react";

class VideoShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="video-show-page">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/G52dUQLxPzg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <h1>Title</h1>
                <p>Description</p>
                <div className="video-uploader">
                    <img src="" alt="" />
                    <h3>First Last Name</h3>
                </div>
            </div>
            // <div className="video-show-page">
            //     <iframe width="560" height="315" src={this.props.video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            //     <h1>{this.props.video.title}</h1>
            //     <p>{this.props.video.description}</p>
            //     <div className="video-uploader">
            //         <img src="" alt="" />
            //         <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
            //     </div>
            // </div>
        )
    }
}

export default VideoShow;
