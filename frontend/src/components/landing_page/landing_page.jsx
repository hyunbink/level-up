import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./landing_page.scss";
import ReactTextTransition, { presets } from "react-text-transition";

import { IoIosArrowDropup } from "react-icons/io"

var texts = [" hedgehogs", " shrimp", " ostrich racing", " astrophysics", " felting", " gundam", " cosplay", " speedrunning", " telescopes"];

class LandingPage extends Component {

    state = {
        textIndex: 0,
    };

    componentDidMount() {
        document.querySelector(".body").id = "home"
        setInterval(() => {
            this.setState({
                textIndex: this.state.textIndex + 1,
                });
            }, 2000);
    }
    
    componentWillUnmount() {
        document.querySelector(".body").id = ""
    }

    render() {
        return (
            // <div>
            //     Sh<span>are your n</span>iche
            // </div>
            <div className="landing-content">
                <div className="arrow bounce">
                    <p className="fa fa-arrow-down"><IoIosArrowDropup/></p>
                </div>
                <div className="banner">
                    <div>
                        <p className="sub-title">Let's <em>Level Up</em></p>
                        <h1 className="title">
                            Get that dopamine boost you've been <br /> looking for with 
                                <ReactTextTransition
                                    className="animated-text"
                                    text={texts[this.state.textIndex % texts.length]}
                                    springConfig={presets.gentle}
                                    style={{ margin: "0 10px" }}
                                    inline
                                />
                        </h1>
                    </div>
                </div>

                <div className="landing-section-one">
                    <div className="card">
                        <span><img src="https://i.ibb.co/D1fcvSS/01.png" alt="flaticon.com" loading="lazy"/></span>
                        <span>
                            <h1 className="title">Share your niche</h1>
                            <p>
                                Ever have that one hobby you really want to get into but can't find anyone to share it with?
                                Come and find a community for your hobby here!
                            </p>
                        </span>
                    </div>

                    <div className="card">
                        <span><img src="https://static.vecteezy.com/system/resources/thumbnails/000/240/170/small/boy-with-glasses.jpg" alt="flaticon.com" loading="lazy"/></span>
                        <span>
                            <h1 className="title">Meet real experts</h1>
                            <p>
                                Veterans of the field would love to share more about their specialties with you!
                                Book one-on-one sessions with seasoned hobbyists to learn more about their niche.
                            </p>
                        </span>
                    </div>

                    <div className="card">
                        <span><img src="https://static.cdnlogo.com/logos/h/10/horizon.svg" alt="flaticon.com" loading="lazy"/></span>
                        <span>
                            <h1 className="title">Expand your horizons</h1>
                            <p>
                                Bored and not sure where to start? Peruse our continually growing list of hobbies and niches.
                                Discover your next time sink!
                            </p>
                        </span>
                    </div>

                </div>


                
            </div>
        )
    }
}

export default LandingPage