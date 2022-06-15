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
            category: "",
            topic: "",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleFormData = this.handleFormData.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    // componentWillUnmount() {
    //     document.querySelector(".sidebar-container").classList.remove("hidden")
    // }

    componentDidMount() {
        // document.querySelector(".sidebar-container").classList.add("hidden")
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
                    category: video.category
                }))
        }
    }

    handleFormData() {
        let formData = new FormData();
        formData.append('video[uploaderId]', this.state.uploaderId);
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[topic]', this.state.topic);
        formData.append('video[category]', this.state.category);
        formData.append('video[url]', this.state.url);
        formData.append('video[video]', this.state.videoFile);
        return formData;
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        console.log(file.size);
        if (file && file.size > 1000000) {
            alert("Please reupload file. Max size 1 MB");
            this.setState({videoFile: "", url: ""});
            return;
        }
        const fileReader = new FileReader();
        fileReader.onloadend = function(){
            this.setState({videoFile: file, url: fileReader.result})
        }.bind(this)
        if (file){
            fileReader.readAsDataURL(file);
        }
    }

    handleErrors() {
        // console.log("hits here", this.props.errors);
        return <ul id="video-form-errors">{this.props.errors.map((error,idx) =>(
            <li key={idx}>{error}</li>
        ))}
        </ul>
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = this.handleFormData();
        this.props.createVideo(this.handleFormData())
            .then(action => this.props.history.push(`${action.video.data._id}`));
    }
        
    handleUpdate(e) {
        //ternary to check if props.errors.length
        e.preventDefault();
        let updatedVideo = this.state.updatedVideo;
        updatedVideo["title"] = this.state.title;
        updatedVideo["description"] = this.state.description;
        updatedVideo["topic"] = this.state.topic;
        updatedVideo["url"] = this.state.url;
        updatedVideo["category"] = this.state.category;

        const submit = async ()=> {
            await this.props.updateVideo(updatedVideo);
            if (this.props.errors.length !==0) {
                console.log("there are some errors");
            } else {
                console.log("no errors then redirect");
                this.props.history.push(`/video/${updatedVideo._id}`);
            }
        }

        submit();
        // this.props.updateVideo(updatedVideo)
        // console.log("finishes updating");
        // console.log("errors", this.props);
        // if (this.props.errors.length !==0) {
        //     console.log("there are some errors");
        // } else {
        //     console.log("no errors then redirect");
        //     this.props.history.push(`/video/${updatedVideo._id}`);
        // }
        

        // .then((action) => this.props.history.push(`${updatedVideo._id}`));

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
                <label className="category">Category
                    <input type="text" placeholder="category" value={this.state.category} onChange={this.update("category")}/>
                </label>
                <label className="topic">Topic
                    <input type="text" placeholder="Topic" value={this.state.topic} onChange={this.update("topic")}/>
                </label>

                {
                    this.props.match.params.videoId ?
                        null
                    :
                    <label className="url">Youtube Link
                    {/* <input type="text" placeholder="URL" value={this.state.url} onChange={this.update("url")}/> */}
                    <input
                        type="file"
                        onChange={this.handleFile}
                        className="file-input-field"
                    />
                </label>
                }
                <div>
                    {this.handleErrors()}
                </div>
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