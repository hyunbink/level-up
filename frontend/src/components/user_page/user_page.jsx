import React from "react";
import './user_page.css';
import { BsFillCheckCircleFill } from 'react-icons/bs'


class UserPage extends React.Component {


    componentDidMount() {
        this.props.fetchUser(this.props.match.params.id);
    }

    render() {
        
        if (!this.props.user) {
            return null;
        }
        // console.log("this user", this.props.user);

        return (
            <div className="user-page">
                <div className="user-container">
                    <div className="user-show-banner">
                            <img className="user-show-banner-img" src="../../images/demo_banner.png" alt="user-show-banner-img"></img>
                    </div>

                    <div className="user-show-info-div">
                        <div className="user-show-info-div-left">
                                {/* <div className="user-info"> */}
                                    <div className="user-essential">
                                        <span className="user-photo-">
                                            <img className="user-show-profile-photo" alt="user-show-profile"></img>
                                        </span>
                                        <span className="user-show-full-name"> {this.props.user.firstName} {this.props.user.lastName} </span>
                                        <span>{this.props.user.professional ? <BsFillCheckCircleFill className="user-show-prof-icon" />: <div></div> }</span>
                                        <p></p>
                                        <br/>
                                        <p>About: {this.props.user.bio}</p>
                                        <br/>
                                        <p>Interests: <ul className="user-show-interests-list">{this.props.user.interests.split(",").map(int=>(
                                            <li className="user-show-interest">{int}</li>
                                        ))}</ul></p>
                                    </div>
                                    {/* <br /> */}
                                {/* </div> */}
                                    
                        </div>
                                <div className="user-show-info-div-right">
                                    <div className="user-details">
                                        {this.props.user.professional? 
                                        <ul> Prof's categories and videos
                                            <div className="user-show-videos">Placeholder for videos</div>
                                            {this.props.user.categories.split(",").map(cat=>(
                                                <li>{cat}</li>
                                            ))}
                                        </ul>
                                        : <div></div> }
                                    </div>
                </div>
                            </div>
<div className="user-reviews-container">
                                    <h1>Reviews Container</h1>
</div>
                </div>
            </div>
        )
    }
}

export default UserPage;