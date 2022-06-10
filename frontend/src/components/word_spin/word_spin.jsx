import React, { Component, useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import "./word_spin.scss";



const texts = [
    "shoe dyeing",
    "kendo",
    "shrimp breeding",
    "droning",
]

class WordSpin extends Component {
    state = {
        textIndex: 0,
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                textIndex: this.state.textIndex + 1,
            })
        }, (20000 / texts.length));
    }

    render() {
        return (
            <div className="word-spin-container">
                <div className="wrapper">
                    Have you ever heard of 
                    <ReactTextTransition
                        className="spinner-text"
                        text={texts[this.state.textIndex % (texts.length)]}
                        springConfig={{tension: 300, friction: 100}}
                        style={{ margin: "0 0px 0 10px" }}
                        inline
                    />?
                </div>
            </div>  
        )
    }
}

// function WordSpin() {
//     const [ textIndex, setCount ] = useState(0);

//     useEffect(() => {
//         setInterval(() => {
//             setCount(textIndex + 1)
//         }, 2000);
//     }, []);

//     return (
//         <div className="word-spin-container">
//             <div className="wrapper">
//                 Have you ever heard of 
//                 <ReactTextTransition
//                     className="spinner-text"
//                     text={texts[textIndex % (texts.length + 1)]}
//                     springConfig={{tension: 300, friction: 10}}
//                     style={{ margin: "0 0 0 10px" }}
//                     inline
//                 />?
//                 {/* <div className="spinner-words">
//                     <span>drone racing</span>
//                     <span>shoe dyeing</span>
//                     <span>kendo</span>
//                     <span>shrimp breeding</span>
//                     <span>drone racing</span>
//                 </div> */}
//             </div>
//         </div>  
//     )
// }

export default WordSpin;