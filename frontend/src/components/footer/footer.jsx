import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./footer.scss";
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";

class Footer extends React.Component {

    topOfPage() {
        window.scrollTo(0,0);
    }

    render() {  
        let bannedPages = ['signup', 'login', 'auth', 'upload', 'edit'];
        
        let display = true;
        
        bannedPages.forEach(page => {
            if (this.props.location.pathname.includes(page)) {
                display = false;
            }
        })
    
        if (display === false) {return null}

        return (
            <footer>
                <nav id="back-to-top-footer" onClick={this.topOfPage}>
                    <p>Back to top</p>
                </nav>
                <nav id="blue-footer">
                    <Link className="blue-footer-link-to-top" to="/" onClick={this.topOfPage}>Shyche</Link>
                    {/* <Link className="blue-footer-link-to-top" to="/" onClick={this.topOfPage}><img
                        alt='shyche-logo'
                        src="shyche_logo.png" 
                        className='footer-logo'
                        />Shyche
                    </Link> */}
                    <div className="dev-header">Developers</div>
                    <div className="blue-footer-dev-info">
                        <div className="dev-info">
                            <div className="dev-info-name">Andrew Yin</div>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/yin-andrew" className="dev-links"><FaGithubSquare/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/andrewyin16407/" className="dev-links"><FaLinkedin/></a>
                        </div>
                        
                        <div className="dev-info">
                            <div className="dev-info-name">Edgar Chin</div>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/echin522" className="dev-links"><FaGithubSquare/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/edgarchin/" className="dev-links"><FaLinkedin/></a>
                        </div>
                        
                        <div className="dev-info">
                            <div className="dev-info-name">Matia Kim</div>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/hyunbink" className="dev-links"><FaGithubSquare/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/matia-kim/" className="dev-links"><FaLinkedin/></a>
                        </div>
                        
                        <div className="dev-info">
                            <div className="dev-info-name">Sam Martins</div>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Samuel1337" className="dev-links"><FaGithubSquare/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/samuel-m-b3b9baa2/" className="dev-links"><FaLinkedin/></a>
                        </div>
                        
                    </div>
                </nav>
                <nav id="black-footer">
                    <p>SHYCHE (shee-sh) is a MERN stack project created by Andrew Yin, Edgar Chin, Matia Kim, and Sam Martins</p>
                </nav>
            </footer>
        )
    }
}

export default withRouter(Footer);