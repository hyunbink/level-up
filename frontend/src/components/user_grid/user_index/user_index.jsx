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
        let counter = 0;

        return (
            <div className="grid-container">
                <div className="grid">
                    {
                        // This is only usable once we can grab only the profs from the backend
                        // Future optimization
                        // this.props.users.data.slice(0, 12).map(user => {
                        this.props.users.data.map(user => {
                            if (counter < 12 && user.professional && user.firstName !== "Demo") {
                                counter += 1;
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