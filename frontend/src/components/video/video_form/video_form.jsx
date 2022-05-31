import React from "react";

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
        debugger
        this.props.createVideo(this.state)
            .then(() => this.props.closeModal());
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
                    <input type="text" placeholder="description" value={this.state.description} onChange={this.update("description")}/>
                </label>
                <label className="category">Category
                    <input type="text" placeholder="dategory" value={this.state.category} onChange={this.update("category")}/>
                </label>
                <label className="url">Youtube Link
                    <input type="text" placeholder="url" value={this.state.url} onChange={this.update("url")}/>
                </label>
                <button className="video-upload-button">Upload</button>
            </form>
        )
    }
}

export default VideoForm;