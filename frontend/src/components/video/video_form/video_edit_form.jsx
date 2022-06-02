import React from "react";

class VideoEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.video;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        console.log("EDIT FORM PROPS", this.props.video)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateVideo(this.state)
            .then(action => this.props.history.push(`${action.video.data._id}`));
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit}> 
                {/* <p className="close-form-button" onClick={() => this.props.closeModal()}>x</p> */}
                <h1>Upload your video</h1>
                <label className="title">Title
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                </label>
                <label className="description">Description
                    <input type="text" placeholder="Description" value={this.state.description} onChange={this.update("description")}/>
                </label>
                <label className="category">Category
                    <input type="text" placeholder="Category" value={this.state.category} onChange={this.update("category")}/>
                </label>
                <label className="url">Youtube Link
                    <input type="text" placeholder="URL" value={this.state.url} onChange={this.update("url")}/>
                </label>
                <button className="video-upload-button">Upload</button>
            </form>
        )
    }
}

export default VideoEditForm;