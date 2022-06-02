import React from "react";
import IconsBackground from "../../icons_background/icons_background";
import "./video_form.scss";

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaderId: this.props.currentUserId,
            title: "",
            description: "",
            category: "",
            url: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    // componentDidMount() {
    //     // Check if update or create form later
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createVideo(this.state)
            // .then(action => console.log(action));
            .then(action => this.props.history.push(`${action.video.data._id}`));
    }

    render () {
        return(
            <div className="video-form-page">
                <IconsBackground />
            <form className="video-form" onSubmit={this.handleSubmit}> 
                {/* <p className="close-form-button" onClick={() => this.props.closeModal()}>x</p> */}
                <h1>Upload your video</h1>
                <label className="title">Title
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                </label>
                <label className="description">Description
                    <textarea rows="5" placeholder="Description" value={this.state.description} onChange={this.update("description")}/>
                </label>
                <label className="category">Category
                    <input type="text" placeholder="Category" value={this.state.category} onChange={this.update("category")}/>
                </label>
                <label className="url">Youtube Link
                    <input type="text" placeholder="URL" value={this.state.url} onChange={this.update("url")}/>
                </label>
                <div className="video-form-buttons">
                    <button className="button">Upload</button>
                    <button onClick={this.props.history.goBack} className="button">Go Back</button>
                </div>
            </form>
            </div>
        )
    }
}

export default VideoForm;