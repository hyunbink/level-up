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
    
    render(){
        let year = new Date().getFullYear() + "-" ;
        let month = new Date().getMonth() + 1 + "-" ;
        if (month.length === 2) month = `0${new Date().getMonth() + 1}-` ;
        let day = new Date().getDate() + "";
        if (day.length === 1) day = '0' + new Date().getDate() + "";
        let today = year + month + day;
        return(
            <div className="bookings-show-div" >
                <div className="bookings-show-edit">
                    <button onClick={this.edit} >Edit this Booking</button>
                    <br/>
                    <button onClick={()=>this.props.deleteBooking(this.props.booking._id).then(()=>this.props.getBookings())}>Delete this Booking</button>
                    <br/>
                </div> 
                {this.state.editing ? 
                    <div className="booking-show-edit-form">
                        <form onSubmit={this.handleSubmit}>
                            <label className="booking-create-title">Title:
                                <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                            </label>
                        <br/>
                            <label className="booking-create-date">When?
                                <input type="date" placeholder="Date" min={today.toLocaleString()} value={this.state.date} onChange={this.update("date")}/>
                            </label>
                        <br/>
                            <label className="booking-create-duration">Select Duration:
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
                            <button className="booking-show-submit-edit-button">Edit Booking</button>
                        </form>
                    </div>
                :
                    <div className="booking-show-container">
                        <div className="booking-show-title">{this.props.booking.title}</div>
                        <div>{this.props.booking.date.split("").slice(0,10) }</div>
                        <div className="booking-show-text">{this.props.booking.duration}</div>
                    </div>

                }
            </div>
        )
    }
}

export default BookingsShow;