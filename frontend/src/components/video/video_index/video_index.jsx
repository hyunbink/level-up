import React from "react";
import VideoIndexItem from "../video_index_item";
import "./video_index.scss";


class VideoIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchAllVideos();
    }

    render() {

        const categories = {
            "shrimp": "animal-husbandry",
            "hedgehogs": "animal-husbandry",
            "raccoons": "animal-husbandry",
            "sugar-gliders": "animal-husbandry",
            "shoe-dyeing": "arts-and-crafts",
            "felting": "arts-and-crafts",
            "gundam": "arts-and-crafts",
            "astrophysics": "astronomy",
            "ufo-sightings": "astronomy",
            "telescopes": "astronomy",
            "otamatone": "music",
            "zither": "music",
            "recorder": "music",
            "kazoo": "music",
            "sock-puppets": "role-play",
            "dungeons-and-dragons": "role-play",
            "cosplay": "role-play",
            "speedrunning": "gaming",
            "modding": "gaming",
            "lore": "gaming",
            "buzkashi": "sports",
            "speedwalking": "sports",
            "ostrich-racing": "sports",
            "smart-mirrors": "technology",
            "computer-mice": "technology",
            "macro-pad": "technology",
        };

        if (!this.props.videos) {return null}
        
        let topics = Object.keys(categories).filter(key=> categories[key]===this.props.topic);
        // console.log("topics", topics);
        // console.log("videos", this.props.videos);
        let vids = Object.values(this.props.videos);
        // console.log("videos", vids);
        let catVids = [];
        for (let i = 0; i < topics.length; i++) {
            for (let j = 0; j< vids.length; j++) {
                // console.log("topic", topics[i]);
                // console.log("going through vids", vids[j].topic);
                if (topics[i] === vids[j].topic) {
                    catVids.push(vids[j]);
                }
            }
        }

        console.log(`final vids of ${this.props.topic}`, catVids);
        
        let prevPage;
        if (this.props.userId) {
            prevPage = "user"
        } else if (this.props.topic) {
            prevPage = "topic"
        }
        return (
            <div className="vid-list-wrapper">
                <ul className="video-list">
                    {
                        catVids.map((video, idx) => (
                            <VideoIndexItem
                                // openModal={this.props.openModal}
                                fetchUser={this.props.fetchUser}
                                // prevPage={prevPage}
                                video={video}
                                key={`video-${idx}`}
                            />
                        ))
                    }
                </ul>

            </div>
        )
    }
}

export default VideoIndex;