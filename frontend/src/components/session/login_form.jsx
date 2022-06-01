import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        console.log(this.props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentDidMount() {
      this.props.clearErrors();
    }

    // handleSubmit(e) {
    //     e.preventDefault();
        
    //     const user = Object.assign({}, this.state);
    //     this.props.login(user)
    //         .then(()=>this.props.history.push('/'))
    // }

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

    // renderErrors() {
    //     if (this.props.errors.length === 0) {
    //         return null;
    //     }
    //     return <ul className="login-errors-list">{Object.values(this.props.errors).map((error, idx)=> (
    //         <li key={idx}>{error}</li>
    //     ))}</ul>
    // }
    renderErrors() {
        // console.log("errors email", Object.values(this.props.errors));
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
    //     console.log(this.props.errors);
    //     const email = document.getElementById("email");
    //     const password = document.getElementById("password");

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
                <button onClick={this.demoLogin} >
                  Demo Log in
                </button>
            </div>
        )

    }
}

export default LoginForm;