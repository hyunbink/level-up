import React from "react";

class ProfAuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bio:"",
            categories:""
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // console.log("props", this.props);
        this.props.fetchUser(this.props.match.params.id);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = this.props.currentUser;
        user.bio = this.state.bio;
        user.categories = this.state.categories;
        user.professional = true;
        console.log("user before sub", user);
        // let user = {
        //   email: this.state.email,
        //   password: this.state.password,
        //   firstName: this.state.firstName,
        //   lastName: this.state.lastName,
        //   bio: this.state.bio,
        //   categories: this.state.categories,
        //   professional: true
        // };
        // console.log("cur user", this.props.currentUser);
        //way to have a placeholder 
        // setTimeout(()=> {
        //     this.props.updateUser(user)
        //         .then(this.props.history.push(`/user/${this.props.currentUser.id}`))
        // }, 5000);

        this.props.updateUser(user)
            .then(this.props.history.push(`/user/${this.props.currentUser._id}`));
            // .catch(err=> console.log("err", err));
        //on signup push to create interest form?
      }

    render() {
        // console.log("state", this.state);

        // console.log("currentuser", this.props.currentUser);

        if (!this.state ) {
            return null;
        }

        // console.log("state", this.state);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Background
                        <textarea id="prof-bio"
                            type="text"
                            value={this.state.bio}
                            onChange={this.update("bio")} 
                            cols="30" 
                            rows="10">
                        </textarea>
                    </label>
                    <label> Categories you are knowledgeable in (if multiple, separate with commas eg "shrimp,keyboard")
                        <input type="text" 
                            id="prof-cat"
                            value={this.state.categories}
                            onChange={this.update("categories")}
                        />
                    </label>
                    <button>Submit!</button>
                </form>
            </div>
        );
    }
}

export default ProfAuthForm;