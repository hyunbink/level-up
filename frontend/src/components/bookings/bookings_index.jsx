import React from "react";
import BookingsShowContainer from "./bookings_show_container";

class BookingsIndex extends React.Component {

    constructor(props) {
        super(props);
        this.getUserBookings = this.getUserBookings.bind(this);
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.userId)
    }

    getUserBookings() {
        this.props.fetchBookings(this.props.userId);
    }
    render () {

        if (!this.props.bookings) {
            console.log("no bookings", this.props.bookings);
            return null;
        }

        return (
            <div>
                <div className="user-show-bookings-div">
                    <ul className="user-show-bookings-ul">
                        {this.props.bookings.data && this.props.currentUserId === this.props.user._id ? <ul>
                            <div>Scheduled Bookings:</div>
                            {this.props.bookings.data.map((booking, idx)=> (
                            <li><BookingsShowContainer key={idx} booking={booking} getBookings={this.getUserBookings}/></li>
                            )
                        )} </ul> : <div></div> }
                    </ul>
                </div>

            </div>
        );
    }
}

export default BookingsIndex;