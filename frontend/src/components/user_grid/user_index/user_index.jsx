import React from "react";
import UserCard from "../user_card/user_card";
import "./user_index.scss";


class UserIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        if (!this.props.users || !this.props.users.data) {return null};

        return (
            <div className="grid-container">
                <div className="grid">
                    {
                        this.props.users.data.map(user => {
                            if (user.professional && user.firstName !== "Demo") {
                                return (
                                    <div className="grid-item">
                                        <UserCard user={user} />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

export default UserIndex;