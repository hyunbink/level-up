import React from "react";
import "./carousel.scss";
import shoe from "./shoe_dye.png";
import kendo from "./kendo2.jpg";
import shrimp from "./shrimp2.png";
import drone from "./drone3.jpg";
import left from "./left.png";
import right from "./right.png";
import { Link } from "react-router-dom";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.loop = this.loop.bind(this);
    }

    componentDidMount() {
        this.start();
        this.loop();
    }

    start() {
        // select elements
        this.track = document.querySelector('.carousel__track');
        this.slides = Array.from(this.track.children);
        this.container = document.querySelector('.carousel__track-container');
        this.nextButton = document.querySelector('.carousel__button.right');
        this.prevButton = document.querySelector('.carousel__button.left');

        // sets width and position
        let viewWidth = window.innerWidth;
        // this.slideWidth = this.slides[0].getBoundingClientRect().width;
        this.slideWidth = viewWidth * 0.65;
        
        this.setSlidePosition = (slide, index) => {
            slide.style.left = this.slideWidth * index + 'px';
        }
        
        this.slides.forEach(this.setSlidePosition);
        
        // moves slides
        this.moveToSlide = (currentSlide, targetSlide) => {
            this.track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }

        // left button event
        this.prevButton.addEventListener("click", e => {

            e.preventDefault();
            clearInterval(this.timer);
            this.loop();

            const currentSlide = this.track.querySelector('.current-slide');
            let prevSlide = currentSlide.previousElementSibling;
            
            if (prevSlide === null) {
                prevSlide = this.track.querySelector('.carousel__slide:last-child')
            }
            
            this.moveToSlide(currentSlide, prevSlide);
        })
        
        // right button event
        this.nextButton.addEventListener("click", e => {

            e.preventDefault();
            clearInterval(this.timer);
            this.loop();

            const currentSlide = this.track.querySelector('.current-slide');
            let nextSlide = currentSlide.nextElementSibling;
            
            if (nextSlide === null) {
                nextSlide = this.track.querySelector('.carousel__slide:first-child')
            }

            this.moveToSlide(currentSlide, nextSlide);
        })
        
    }

    loop() {
        this.timer = setInterval(() => {
            const currentSlide = this.track.querySelector('.current-slide');
            let nextSlide = currentSlide.nextElementSibling;
            
            if (nextSlide === null) {
                nextSlide = this.track.querySelector('.carousel__slide:first-child')
            }

            this.moveToSlide(currentSlide, nextSlide);
        }, 5000);
    }

    render() {
        return (
            <div className="carousel">
                <button className="carousel__button left">
                    <img src={left} alt="" />
                </button>
                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        <li className="carousel__slide current-slide">
                            <Link to="/topic/arts-and-crafts"><img className="carousel__image" src={shoe} alt="1" /></Link>
                        </li>
                        <li className="carousel__slide">
                            <Link to="/topic/sports"><img className="carousel__image" src={kendo} alt="2" /></Link>
                        </li>
                        <li className="carousel__slide">
                            <Link to="/topic/animal-husbandry"><img className="carousel__image" src={shrimp} alt="3" /></Link>
                        </li>
                        <li className="carousel__slide">
                            <Link to="/topic/technology"><img className="carousel__image" src={drone} alt="4" /></Link>
                        </li>
                    </ul>
                </div>
                <button className="carousel__button right">
                    <img src={right} alt="" />
                </button>
                {/* <div className="white__fog"></div> */}
            </div>
        )
    }
}
export default Carousel;