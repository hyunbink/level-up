import React from "react";
import IconsBackground from "../../icons_background/icons_background";
import "./video_form.scss";
import { MdClose } from "react-icons/md";

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaderId: this.props.currentUserId,
            title: "",
            description: "",
            topic: "",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        let videoId = this.props.match.params.videoId;
        let video;
        if (videoId) {
            this.props.fetchVideo(this.props.match.params.videoId)
                .then(action => video = action.video.data[videoId])
                .then(() => this.setState({updatedVideo: video}))
                .then(() => this.setState({
                    title: video.title,
                    description: video.description,
                    topic: video.topic,
                    url: video.url,
                }))
        }
    }

    handleFormData() {
        let form = new FormData();
        form.append('video[uploaderId]', this.state.uploaderId)
        form.append('video[title]', this.state.title)
        form.append('video[description]', this.state.description)
        form.append('video[topic]', this.state.topic)
        form.append('video[url]', this.state.url)
        return form;
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = function(){
            this.setState({imageFile: file, photoUrls: fileReader.result})
        }.bind(this)
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createVideo(this.state)
            // .then(action => console.log(action));
            .then(action => this.props.history.push(`${action.video.data._id}`));
        }
        
    handleUpdate(e) {
        e.preventDefault();
        let updatedVideo = this.state.updatedVideo;
        updatedVideo["title"] = this.state.title;
        updatedVideo["description"] = this.state.description;
        updatedVideo["topic"] = this.state.topic;
        updatedVideo["url"] = this.state.url;
        this.props.updateVideo(updatedVideo)
            .then(action => this.props.history.push(`/video/${updatedVideo._id}`));
    }

    render () {
        return(

            <div className="video-form-page">
                <IconsBackground />
            <form className="video-form animate-pop" onSubmit={
                this.props.match.params.videoId 
                        ? this.handleUpdate 
                        : this.handleSubmit
            }> 
                {/* <p className="close-form-button" onClick={() => this.props.closeModal()}>x</p> */}
                {
                    this.props.match.params.videoId 
                        ? <h1>Update your video</h1> 
                        : <h1>Upload your video</h1>
                
                }
                <label className="title">Title
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                </label>
                <label className="description">Description
                    <textarea rows="5" placeholder="Description" value={this.state.description} onChange={this.update("description")}/>
                </label>
                <label className="topic">Topic
                    <input type="text" placeholder="Topic" value={this.state.topic} onChange={this.update("topic")}/>
                </label>
                <label className="url">Youtube Link
                    {/* <input type="text" placeholder="URL" value={this.state.url} onChange={this.update("url")}/> */}
                    <input
                        type="file"
                        onChange={this.handleFile}
                        className="file-input-field"
                    />
                </label>

                <div className="video-form-buttons">
                {
                    this.props.match.params.videoId 
                        ? <button className="button">Update</button>
                        : <button className="button">Upload</button>
                }
                </div>
            </form>
                <button onClick={this.props.history.goBack} className="close"><MdClose/></button>
            </div>
        )
    }
}

export default VideoForm;