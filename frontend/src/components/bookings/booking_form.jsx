import React from "react";

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
        this.handleErrors = this.handleErrors.bind(this);
        this.sussessfulBooking = this.sussessfulBooking.bind(this);
    }

    componentDidMount() {
        this.props.clearBookingsErrors();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    sussessfulBooking() {
        if (this.props.errors.length > 0) {
            return
        } else {
            this.setState({title: '', date: '', duration: ''})
            alert("Check your profile to see your bookings!")
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let newBooking = this.state;
        this.props.createBooking(newBooking)
            .then(()=> this.props.getUserBookings())
            .then(()=> this.sussessfulBooking())
    }

    handleErrors() {
        return <ul id="booking-form-errors">{this.props.errors.map((error,idx) =>(
            <li key={idx}>{error}</li>
        ))}

        </ul>
    }

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
                    {this.handleErrors()}
                    <h1 className="book-form-title">Book a session with an Expert</h1>
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
                    <button className="user-show-larger-buttons">Schedule Booking</button>
                </form>
        )
    }
}

export default BookingForm;

