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
        document.querySelector(".body").id = "home";
        document.querySelector("footer").id = "home";
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
                        <span><img src="https://cdn1.iconfinder.com/data/icons/professional-avatars-5/64/programmer-programming-developer-designer-avatar-512.png" alt="flaticon.com" loading="lazy"/></span>
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

                <div className="landing-section-two">
                    <div className="about">
                        <h2>About Us</h2>
                        <h1 className="title">Providing an all-in-one platform for hobbyists to connect with long-time veterans</h1>
                        <p>If Morbius has a trillion fans I am one of them. If Morbius has 10 fans I am one of them. If Morbius has no fans, that I means I am no longer on Earth. If the Universe is against Morbius, I am against the Universe. I love Morbius until my last breath.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <img className="section-banner" src="https://img.freepik.com/free-vector/man-studying-galaxy-through-telescope-women-holding-planets-models-watching-meteors-constellation-stars-flat-vector-illustration-horoscope-astronomy-discovery-astrology-concepts_74855-10106.jpg?w=2000" alt="freepik.com" loading="lazy"/>
                    </div>
                </div>


                <div className="landing-section-three">
                    <img className="section-banner" src="https://yggdrasille.files.wordpress.com/2018/08/dark-souls-3-template.jpg?w=768" alt="freepik.com" loading="lazy"/>
                    <div className="why-us">
                        <h2>Why Us</h2>
                        <h1 className="title">Just as your platform content targets humans, it is just practical to leave the job to a human</h1>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </h3>
                    </div>
                </div>

                <div className="landing-section-four">
                    <div className="section-header">
                        <h1>Our Communities</h1>
                        <h2>
                            A little peek into our many worlds
                        </h2>
                    </div>
                    <div className="card-container">

                        <div className="card">
                            <img src="https://cdn.shopify.com/s/files/1/0050/7091/3651/products/Red-Fishbone-Pinto-Caridina-Shrimp_1200x.png?v=1613190445" alt="flaticon.com" loading="lazy"/>
                            <h1 className="title">Shrimp breeding and caretaking</h1>
                        </div>

                        <div className="card">
                            <img src="https://i.nextmedia.com.au/frankie/shoes3.jpg" alt="flaticon.com" loading="lazy"/>
                            <h1 className="title">Shoe dyeing</h1>
                        </div>

                        <div className="card">
                            <img src="https://cdn.shopify.com/s/files/1/0741/2319/articles/OT_deluxe_black_07_800x.jpg?v=1577995882" alt="flaticon.com" loading="lazy"/>
                            <h1 className="title">The art of the Otamatone</h1>
                        </div>

                        <div className="card">
                            <img src="https://i.pinimg.com/550x/91/5f/be/915fbe23181642b625c194e25b53f214.jpg" alt="flaticon.com" loading="lazy"/>
                            <h1 className="title">Hardware and software modding</h1>
                        </div>

                        <div className="card">
                            <img src="https://paulickreport.com/wp-content/uploads/2021/05/Ostrich-races-LAD.jpg" alt="flaticon.com" loading="lazy"/>
                            <h1 className="title">Ostrich racing</h1>
                        </div>

                        <div className="card">
                            <img src="https://3.bp.blogspot.com/-9D7NM8YGne0/Wr-g7cEHU-I/AAAAAAAADJ8/5l0VzKRncgcZda1WZ_jMoUyNA6eBJwJZgCLcBGAs/s1600/detailed-rg-unicorn-gundam%25252B%252525282%25252529%2B%2528Copy%2529.jpg" alt="flaticon.com" loading="lazy"/>
                            <h1 className="title">Gundam Plastic Models</h1>
                        </div>
                    </div>
                </div>

                <div className="landing-section-five">
                    <div className="cofounders-header">
                        <h1>Project Members</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage