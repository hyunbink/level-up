import React from "react";
import NavbarContainer from "../nav/navbar_container";

class BookingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookingStudId: this.props.bookerId,
            bookingProfId: this.props.bookeeId,
            title: '',
            date: '',
            duration: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let newBooking = this.state;
        this.props.createBooking(newBooking)
            .then(()=>this.props.getUserBookings());
    }

// include categories/topic?
    
    render(){
        // if (!this.props.userId) return null;
        let year = new Date().getFullYear() + "-" ;
        let month = new Date().getMonth() + 1 + "-" ;
        if (month.length === 2) month = `0${new Date().getMonth() + 1}-` ;
        let day = new Date().getDate() + "";
        if (day.length === 1) day = '0' + new Date().getDate() + "";
        let today = year + month + day;
        return(
                <form onSubmit={this.handleSubmit} className='user-show-bookings-form'>
                    <br/>
                    <h1>Book a session with an Expert</h1>
                    <br/>
                    <label className="booking-create-title">Title:
                    </label>
                        <input className="bk-form-input" type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                    <br/>
                    <label className="booking-create-date">When?
                    </label>
                        <input className="bk-form-input" type="date" placeholder="Date" min={today.toLocaleString()} value={this.state.date} onChange={this.update("date")}/>
                    <br/>
                    <label className="booking-create-duration">Select Duration:
                    </label>
                        <input className="bk-form-input"  placeholder='select one' list="duration-list" type='text' onChange={this.update("duration")} value={this.state.duration}/>
                            <datalist className="booking-create-dur-list" id="duration-list">
                                <option className="booking-create-dur-list-item" value="30 minutes" />
                                <option className="booking-create-dur-list-item" value="1 hour" />
                                <option className="booking-create-dur-list-item" value="1 hour 30 minutes" />
                                <option className="booking-create-dur-list-item" value="2 hours" />
                                <option className="booking-create-dur-list-item" value="more than 2 hours" />
                            </datalist> 
                    <br/>
                    {/* <label className="booking-create-prof">Which Professional?
                        <input list="prof-list" placeholder="professionals" value={this.state.bookingProfId} onChange={this.update("bookingProfId")}/>
                        <datalist className="booking-create-prof-list" id="prof-list">
                        {this.props.professionals.map((prof, i) => (
                            <option key={i} className="booking-create-prof-list-item" value={prof._id}>{prof.lastName},{prof.firstName}</option>
                            ))}
                            </datalist> 
                        </label> */}
                    <button>Submit</button>
                </form>
        )
    }
}

export default BookingForm;

