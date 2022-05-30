import React from "react";

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="user-page">
                <div className="user-container">
                    <div className="user-banner">
                        <div className="user-photo">
                            <div className="user-info">
                                <div className="user-essential">
                                    <h1>Username</h1>
                                    <p>Bio</p>
                                </div>
                                <br />
                                <div className="user-details">
                                    
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