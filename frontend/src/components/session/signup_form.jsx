import React from "react";
import { withRouter } from 'react-router-dom'
import IconsBackground from "../icons_background/icons_background";
import "./signup_form.scss";

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
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
      }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    demoLogin(e) {
        e.preventDefault();
        let demo = {email: "demo@mail.com", password: "123456"};
        this.props.login(demo);
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.props.errors.length > 0) {return null}

        let user = {
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        };

        const signup = async () => {
            await this.props.signup(user)
        }
        signup();   

        this.props.signup(user);
        console.log("signin", this.props.signedIn)
        if (this.props.signedIn) {
            console.log("signin", this.props.signedIn)

            const login = async () => {
                await this.props.login(user)
                this.props.history.push("/home");
                console.log("done");
            }
            login();

            // this.props.login({user});
            // console.log("errors", this.props.errors);
            // this.props.push("/home");
        }

        console.log("finished signingup");
        // .catch(()=> console.log("failed"));
        // .then(()=>this.props.login({email:user.email, password: user.password}))
            //.then(()=>this.props.login({email:user.email, password: user.password}))
        //on signup push to create interest form?
    }

    renderErrors() {
        // console.log("errors email", Object.values(this.props.errors));
        return(
          <ul className="signup-errors">
            {Object.values(this.props.errors).map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
    } 

    render() {

        return (
            <div className="session-page">
                <IconsBackground />
                <div className="session-container animate-pop">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <h1>Join us today</h1>
                    <label>First Name
                        <input
                            id="first-name"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.update("firstName")}
                            placeholder="First name"
                        />
                    </label>
                    <label>Last Name
                        <input
                            id="last-name"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.update("lastName")}
                            placeholder="Last name"
                        />
                    </label>
                        <label>Email
                            <input
                                id="email"
                                type="text"
                                value={this.state.email}
                                onChange={this.update("email")}
                                placeholder="your@email.com"
                            />
                        </label>
                        <label>Password
                            <input
                                id="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                                placeholder="*******"
                            />
                        </label>
                        {this.renderErrors()}
                        <div className="centralize-button">
                            <button className="button" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="buttons-container">
                        <button className="button" onClick={this.demoLogin} >
                            Demo Log in
                        </button>
                        <p>Already a member?</p>
                        <button className="button" onClick={()=>this.props.history.push("/login")} >
                            Log In Instead
                        </button>
                    </div>
                </div>
            </div>
        )

    }
}

export default withRouter(SignUp);