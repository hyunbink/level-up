import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import './navbar.scss';
import SearchBarContainer from '../searchbar/search_bar_container';


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
    this.props.logout();
    this.props.history.push("/");
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="nav-wrapper">
              <div className='nav-logo' onClick={()=>this.props.history.push("/home")} >
                <img
                  src="shyche_logo.png" 
                  className='logo-image'
                />
                Shyche
              </div>
              <div className='nav-search'>
                <SearchBarContainer />
              </div>
              <div className="nav-right">
                <div className='nav-burger'>
                  <div>
                  <GiHamburgerMenu id="nav-burger" />
                  </div>
                  <div className='nav-drop'>
                      <div onClick={()=>this.props.history.push(`/auth/${this.props.currentUser.id}`)}>
                        Apply to be a Professional!
                      </div>
                      <div onClick={()=>this.props.history.push(`/video/upload`)}>
                        Upload a video
                      </div>
                      <div onClick={()=>this.props.history.push(`/user/${this.props.currentUser.id}`)}>
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
              <div className='nav-logo' onClick={()=>this.props.history.push("/home")} >
                <img
                  src="shyche_logo.png" 
                  className='nav-logo'
                />
                Shyche
              </div>
              <div className='nav-right'>
                <div className='nav-burger'>
                    <GiHamburgerMenu id="nav-burger" />
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

    let bannedPages = ['signup', 'login', 'upload', 'auth', 'edit'];

    let display = true;

    bannedPages.forEach(page => {
        if (this.props.location.pathname.includes(page)) {display = false}
    })

    if (display === false) {return null}


    if (this.props.location.pathname.includes('/signup') || this.props.location.pathname.includes('/login')) {return null}

    return (

      <div className='nav-container'>

          { this.getLinks() }
      </div>
    );
  }
}

export default withRouter(NavBar);