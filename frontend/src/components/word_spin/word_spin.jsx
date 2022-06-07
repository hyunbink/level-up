import React, { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import "./word_spin.scss";

// class WordSpin extends React.Component {

//     render() {
//         return (
//             <div className="word-spin-container">
//                 <div className="wrapper">
//                     Have you ever heard of <p>..................................</p>?
//                     <div className="spinner-words">
//                         <span>drone racing</span>
//                         <span>shoe dyeing</span>
//                         <span>kendo</span>
//                         <span>shrimp breeding</span>
//                         <span>drone racing</span>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

const texts = [
    "drone racing",
    "shoe dyeing",
    "kendo",
    "shrimp breeding",
    "ostrich runs",
    "gundams"
]

function WordSpin() {
    const [ textIndex, setCount ] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount(textIndex + 1)
        }, 2000);
    });

    return (      
        <div className="word-spin-container">
                <div className="wrapper">
                    Have you ever heard of 
                    <ReactTextTransition
                        className="spinner-text"
                        text={texts[textIndex % texts.length]}
                        springConfig={presets.gentle}
                        style={{ margin: "0 10px" }}
                        inline
                    />?
                    {/* <div className="spinner-words">
                        <span>drone racing</span>
                        <span>shoe dyeing</span>
                        <span>kendo</span>
                        <span>shrimp breeding</span>
                        <span>drone racing</span>
                    </div> */}
                </div>
            </div>  
    )
}

export default WordSpin;