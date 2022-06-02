import React from "react";

class BookingsShow extends React.Component{
    constructor(props){
        super(props);
        console.log("HEASOIF", this.props)
        this.state = {
            bookingStudId: this.props.booking.bookingStudId,
            bookingProfId: this.props.booking.bookingProfId,
            title: this.props.booking.title,
            date: this.props.booking.date,
            duration: this.props.booking.duration
        };
        this.update = this.update.bind(this);
        this.edit = this.edit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    edit() {
        this.setState({editing: !this.state.editing})
    }

    handleSubmit(e) {
        e.preventDefault();
        let newBooking = this.props.booking;
        newBooking["title"] = this.state.title;
        newBooking["date"] = this.state.date;
        newBooking["duration"] = this.state.duration;
        this.setState({editing:false});
        console.log("new bookingggg", newBooking);
        this.props.updateReview(newBooking)
            .then(()=>this.props.getReviews());
    }
    
    render(){
        return(
            <div>
                {/* {this.props.currentUserId && this.props.currentUserId === this.props.booking.} */}
                in it
            </div>
        )
    }
}

export default BookingsShow;