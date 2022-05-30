import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }

        // this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
        console.log(this.props.errors);
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if (this.props.errors) {
            email.style = "background-color: pink; border-color: red; color: red;"
        }
        
        if (this.props.errors) {
            password.style = "background-color: pink; border-color: red; color: red;"
        }

        return <p className="error-message">Invalid Credentials</p>
    }


    render() {

        return (
            <div className="session-page">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <div className="session-headline">Log In</div>
                    <label>Email
                        <input
                            id="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                        />
                    </label>
                    <label>Password
                        <input
                            id="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.update("password")}
                        />
                    </label>
                    {this.renderErrors()}
                    <button type="submit">
                        Log In
                    </button>
                </form>
            </div>
        )

    }
}

export default LoginForm;