import React from "react";

class BookingsShow extends React.Component{
    constructor(props){
        super(props);
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

    // componentDidMount() {
    //     this.props.clearBookingsErrors();
    // }

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
        this.props.updateBooking(newBooking)
            .then(()=>this.props.getBookings());
    }

    handleErrors() {
        console.log("errors", this.props.errors);
        return <ul id="booking-form-errors">{this.props.errors.map((error,idx) =>(
            <li key={idx}>{error}</li>
        ))}
        </ul>
    }
    
    render(){
        let year = new Date().getFullYear() + "-" ;
        let month = new Date().getMonth() + 1 + "-" ;
        if (month.length === 2) month = `0${new Date().getMonth() + 1}-` ;
        let day = new Date().getDate() + "";
        if (day.length === 1) day = '0' + new Date().getDate() + "";
        let today = year + month + day;
        return(
            <div className="bookings-show-div" >
                {this.handleErrors()}
                {this.state.editing ? 
                    <div className="booking-show-edit-form">
                        <form onSubmit={this.handleSubmit}>
                            <label className="booking-create-title">Title:
                            </label>
                            <br/>
                                <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                        <br/>
                            <label className="booking-create-date">Date:
                            </label>
                            <br/>
                                <input type="date" placeholder="Date" min={today.toLocaleString()} value={this.state.date} onChange={this.update("date")}/>
                        <br/>
                            <label className="booking-create-duration">Select Duration:
                            <br/>
                                <input placeholder='select one' list="duration-list" type='text' onChange={this.update("duration")} value={this.state.duration}/>
                                    <datalist className="booking-create-dur-list" id="duration-list">
                                        <option className="booking-create-dur-list-item" value="30 minutes" />
                                        <option className="booking-create-dur-list-item" value="1 hour" />
                                        <option className="booking-create-dur-list-item" value="1 hour 30 minutes" />
                                        <option className="booking-create-dur-list-item" value="2 hours" />
                                        <option className="booking-create-dur-list-item" value="more than 2 hours" />
                                    </datalist> 
                            </label>
                        <br/>
                            <button className="user-show-buttons">Edit Booking</button>
                        </form>
                    </div>
                :
                    <div className="booking-show-container">
                        <div className="booking-show-title">{this.props.booking.title}</div>
                        <div className="booking-show-date" >{this.props.booking.date.split("").slice(0,10) }</div>
                        <div className="booking-show-duration">{this.props.booking.duration}</div>
                    </div>
                }
                <div className="bookings-show-edit">
                    <button className="user-show-buttons" onClick={this.edit} > Edit </button>
                    <button className="user-show-buttons" onClick={()=>this.props.deleteBooking(this.props.booking._id).then(()=>this.props.getBookings())}> Delete </button>
                </div> 
            </div>
        )
    }
}

export default BookingsShow;