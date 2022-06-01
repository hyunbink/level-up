import React from "react";

class BookingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookingStudId: this.props.currentUserId,
            bookingProfId: '',
            title: '',
            date: '',
            duration: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        this.props.fetchUsers();
    }

    update(field) {
        console.log('update', this.state)
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBooking(this.state)
            // .then(() => this.props.closeModal());
    }

// include categories/topic?
    
    render(){
        if (!this.props.currentUserId) return null;;
        if (!this.props.professionals) return <div>Sorry no professionals to book</div>;
        let year = new Date().getFullYear() + "-" ;
        let month = new Date().getMonth() + 1 + "-" ;
        if (month.length === 2) month = `0${new Date().getMonth() + 1}-` ;
        let day = new Date().getDate() + "";
        if (day.length === 1) day = '0' + new Date().getDate() + "";
        let today = year + month + day;
        return(
            <form onSubmit={this.handleSubmit} className='booking-create-form'>
                <h1>Book your session with a professional!</h1>
                <label className="booking-create-title">Title:
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}/>
                </label>
                <label className="booking-create-date">When?
                    <input type="date" placeholder="Date" min={today.toLocaleString()} value={this.state.date} onChange={this.update("date")}/>
                </label>
                <label className="booking-create-duration">Select Duration:
                    <input list="duration-list" type='text' onChange={this.update("duration")} placeholder="duration" value={this.state.duration}/>
                        <datalist className="booking-create-dur-list" id="duration-list">
                            <option className="booking-create-dur-list-item" value="30 minutes" />
                            <option className="booking-create-dur-list-item" value="1 hour" />
                            <option className="booking-create-dur-list-item" value="1 hour 30 minutes" />
                            <option className="booking-create-dur-list-item" value="2 hours" />
                            <option className="booking-create-dur-list-item" value="more than 2 hours" />
                        </datalist> 
                </label>
                <label className="booking-create-prof">Which Professional?
                    <input list="prof-list" placeholder="professionals" value={this.state.bookingProfId} onChange={this.update("bookingProfId")}/>
                        <datalist className="booking-create-prof-list" id="prof-list">
                            {this.props.professionals.map((prof, i) => (
                                <option key={i} className="booking-create-prof-list-item" value={prof._id}>{prof.lastName},{prof.firstName}</option>
                            ))}
                        </datalist> 
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default BookingForm;