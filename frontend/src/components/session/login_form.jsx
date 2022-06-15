import React from "react";
import IconsBackground from "../icons_background/icons_background";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
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

    demoLogin(e) {
      e.preventDefault();
      let demo = {email: "demo@mail.com", password: "123456"};
      this.props.login(demo);
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.login(user);
      }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
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

    render() {

      return (
          <div className="session-page">
            <IconsBackground />
            <div className="session-container animate-pop">
              <form className="session-form" onSubmit={this.handleSubmit}>
                  <h1>Welcome Back!</h1>
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
                        Log In
                    </button>
                  </div>
              </form>
              <div className="buttons-container">
                <button className="button" onClick={this.demoLogin} >
                  Demo Log in
                </button>
                <p>New account?</p>
                <button className="button" onClick={()=>this.props.history.push("/signup")} >
                  Sign Up Instead
                </button>
              </div>
            </div>
          </div>
        )
    }
}

export default LoginForm;