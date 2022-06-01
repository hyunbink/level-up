import React from "react";
import { withRouter } from 'react-router-dom'

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
      }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }


    handleSubmit(e) {
        e.preventDefault();
        let user = {
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        };

        this.props.signup(user)
            .then(()=>this.props.login({email:user.email, password: user.password}))
            .then(()=>this.props.history.push("/"))
            .catch(()=> console.log("failed"));
            //.then(()=>this.props.login({email:user.email, password: user.password}))
        //on signup push to create interest form?
      }

    renderErrors() {
        console.log("errors email", Object.values(this.props.errors));
        return(
          <ul>
            {Object.values(this.props.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      } 

    // renderErrors() {
    //     if (this.props.errors.length === 0) {
    //         return null;
    //     }
    //     return <ul className="signup-errors-list">{this.props.errors.map((error, idx)=> (
    //         <li key={idx}>{error}</li>
    //     ))}</ul>
    // }

    // renderErrors() {
    //     console.log(this.props.errors);
    //     const firstName = document.getElementById("firstName");
    //     const lastName = document.getElementById("lastName");
    //     const email = document.getElementById("email");
    //     const password = document.getElementById("password");
        
    //     if (this.props.errors) {
    //         firstName.style = "background-color: pink; border-color: red; color: red;"
    //     }
        
    //     if (this.props.errors) {
    //         lastName.style = "background-color: pink; border-color: red; color: red;"
    //     }

    //     if (this.props.errors) {
    //         email.style = "background-color: pink; border-color: red; color: red;"
    //     }
        
    //     if (this.props.errors) {
    //         password.style = "background-color: pink; border-color: red; color: red;"
    //     }

    //     return <p className="error-message">Invalid Credentials</p>
    // }


    render() {

        return (
            <div className="session-page">
                <form className="session-form" onSubmit={this.handleSubmit}>
                    <div className="session-headline">Sign Up</div>
                <label>First Name
                    <input
                        id="first-name"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update("firstName")}
                    />
                </label>
                <label>Last Name
                    <input
                        id="last-name"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.update("lastName")}
                    />
                </label>
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
                        Sign Up
                    </button>
                </form>
            </div>
        )

    }
}

export default withRouter(SignUp);