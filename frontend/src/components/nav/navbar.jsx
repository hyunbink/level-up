import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'


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
      if (this.props.loggedIn) {
        return (
            <div className="nav-wrapper">
              <div className="nav-left">
                <Link to={`/user/${this.props.currentUserId}`} className="nav-link" >
                  <div className="nav-link-text">Profile</div> 
                </Link>
                <Link to ={"/login"} onClick={this.logoutUser} className="nav-link">
                  <div className="nav-link-text">Logout</div> 
                </Link>
              </div>
              <div className='nav-mid' >
                Welcome home
              </div>
              <div className="nav-right">
                <div className='nav-burger'>
                  <div>
                    borger
                  </div>
                  <div className='nav-drop'>
                      <div>
                        upload a video -coming soon
                      </div>
                      <div onClick={()=>this.props.history.push(`/user/${this.props.currentUserId}`)}>
                        Profile
                      </div>
                      <div onClick={this.logoutUser} >
                        Logout 
                      </div>
                  </div>
                </div>
              </div>

            </div>
        );
      } else {
        return (

            <div className="nav-wrapper">
              <div className='nav-left'>
                <Link to={'/signup'} className="nav-link">Signup</Link>
                <Link to={'/login'} className = "nav-link">Login</Link>
              </div>
              <div className='nav-right'>
                <div className='nav-burger'>
                    <div className='nav-drop'>
                        <div onClick={()=> this.props.history.push("/signup")}>
                          Sign Up 
                        </div>
                        <div onClick={()=>this.props.history.push(`/login`)}>
                          Login
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        );
      }
  }

  render() {
    // if (!this.props.currentUser) {
    //   return null;
    // }
      return (

        <div className='nav-container'>

            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;