import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./footer.scss";

class Footer extends React.Component {

    topOfPage() {
        window.scrollTo(0,0);
    }

    render() {

        let bannedPages = ['signup', 'login'];

        let display = true;
    
        bannedPages.forEach(page => {
            if (this.props.location.pathname.includes(page)) {display = false}
        })
    
        if (display === false) {return null}

        return (
            <footer>
                <nav id="back-to-top-footer" onClick={this.topOfPage}>
                    <p>Back to top</p>
                </nav>
                <nav id="blue-footer">
                    <Link to="/" onClick={this.topOfPage}>Level-Up</Link>
                </nav>
                <nav id="black-footer">
                    <p>levelup.com is a MERN stack project created by Andrew Yin, Edgar Chin, Matia Kim, and Sam Martins in June, 2022.</p>
                </nav>
            </footer>
        )
    }
}

export default withRouter(Footer);