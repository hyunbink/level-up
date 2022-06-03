import React from "react";
import "./word_spin.scss";

class WordSpin extends React.Component {

    render() {
        return (
            <div className="word-spin-container">
                <div className="wrapper">
                    Have you ever heard of <p>..................................</p>?
                    <div className="spinner-words">
                        <span>drone racing</span>
                        <span>shoe dyeing</span>
                        <span>kendo</span>
                        <span>shrimp breeding</span>
                        <span>drone racing</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default WordSpin;