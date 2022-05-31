import React from 'react';
import { Link } from 'react-router-dom'
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchUser(this.props.match.params.id);
  // }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout()
        .then(()=>this.props.history.push("/login"));
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    console.log("props", this.props);
      if (this.props.loggedIn) {
        return (
            <div>
              
                {/* <Link to={'/tweets'}>All Tweets</Link> */}
                <Link to={`/user/${this.props.currentUserId}`}>Profile</Link>
                {/* <Link to={'/new_tweet'}>Write a Tweet</Link> */}
                <Link to ={"/login"} onClick={this.props.logout}>Logout</Link>
                {/* <button onClick={this.logoutUser}>Logout</button> */}
            </div>
        );
      } else {
        return (
            <div>
                <Link to={'/signup'}>Signup</Link>
                <Link to={'/login'}>Login</Link>
            </div>
        );
      }
  }

  render() {
    // if (!this.props.currentUser) {
    //   return null;
    // }
      return (
        <div>
            <h1>Level-Up</h1>
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;