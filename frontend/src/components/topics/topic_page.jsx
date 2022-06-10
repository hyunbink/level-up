import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from "../nav/navbar_container";
import VideoIndexContainer from "../video/video_index/video_index_container";
import "../video/video_index/video_index.scss";


class TopicPage extends React.Component {
    constructor(props) {
        super(props);

        this.formatTopicName = this.formatTopicName.bind(this);
    }

    capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    formatTopicName() {
        let topic = this.props.topic;
        // console.log("typeof topic", typeof topic);
        let words;
        if (topic.includes("-")) {
            words = topic.split("-")
        } else {
            words = topic.split("-")
        }
        return words.map(word => (this.capitalize(word))).join(" ");
    }

    render() {
        return(
                <div className="topic-page">
                    <div className="video-index-header">
                        <img src=""/>
                        <h1>{this.formatTopicName()}</h1>
                    </div>
                    <VideoIndexContainer topic={this.props.topic}/>
                </div>
        )
    }
}

export default TopicPage;