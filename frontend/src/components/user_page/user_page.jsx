import React from "react";

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
                    <div className="user-banner">
                        <div className="user-photo">
                            <div className="user-info">
                                <div className="user-essential">
                                    <h1>{this.props.user.firstName}</h1>
                                    {this.props.user.professional ? <p>Super professional</p>: <div></div> }
                                    <p>Bio: {this.props.user.bio}</p>
                                    <p>Interests: {this.props.user.interests}</p>
                                </div>
                                <br />
                                

                                <div className="user-details">
                                    {this.props.user.professional? 
                                    <ul> this is my expertise
                                        <li>{this.props.user.categories}</li>
                                    </ul>
                                    : <div></div> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPage;