import React from "react";
import { withRouter } from "react-router-dom";
import "../user_index/user_index";

class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { user } = this.props;

        return (
            <div className="card"  onClick={()=>this.props.history.push(`/user/${user._id}`)}>
                <img className="card-img" src={user.photoUrl} alt="user photo" />
                <div className="card-content">
                    <h1 className="card-header">{user.firstName} {user.lastName[0]}.</h1>
                    <p className="card-text">
                        {user.bio}
                    </p>
                    <button className="card-btn"  onClick={()=>this.props.history.push(`/category/${user.categories}`)}>
                        <p>Learn more about</p>
                        <span>{user.categories}</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default withRouter(UserCard);