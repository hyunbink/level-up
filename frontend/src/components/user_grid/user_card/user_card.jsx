import React from "react";
import "../user_index/user_index";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { user } = this.props;

        return (
            <div className="card">
                <img className="card-img" src={user.photoUrl} alt="user photo" />
                <div className="card-content">
                    <h1 className="card-header">{user.firstName} {user.lastName}</h1>
                    <p className="card-text">
                        {user.bio}
                    </p>
                    <button className="card-btn">
                        Learn more about <span>{user.categories[0]}</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default UserCard;