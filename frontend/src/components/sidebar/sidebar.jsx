import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./sidebar.scss";
import { GiShrimp } from "react-icons/gi"
import { GoTelescope } from "react-icons/go"
import { MdOutlineDraw } from "react-icons/md"
import { MdSportsEsports } from "react-icons/md"
import { GiSewingNeedle } from "react-icons/gi"
import { BsMusicNoteBeamed } from "react-icons/bs"
import { FaTheaterMasks } from "react-icons/fa"
import { MdSportsFootball } from "react-icons/md"
import { GiTechnoHeart } from "react-icons/gi"

class SideBar extends React.Component {

    render() {

        let allowedPages = ['home', 'category', 'video', 'search', 'topic'];
        let bannedPages = ['upload', 'user'];


        let display = false;

        allowedPages.forEach(page => {
            if (this.props.location.pathname.includes(page)) {display = true}
        })

        bannedPages.forEach(page => {
            if (this.props.location.pathname.includes(page)) {display = false}
        })

        if (display === false) {return null}

        return (
            <div className="sidebar-container">
                <h1>Explore Topics</h1>
                <ul>
                    <Link to={`/topic/animal-husbandry`}><li><span><GiShrimp /></span> Animal Husbandry</li></Link>
                    <Link to={`/topic/astronomy`}><li><span><GoTelescope /></span> Astronomy</li></Link>
                    <Link to={`/topic/drawing`}><li><span><MdOutlineDraw /></span> Drawing</li></Link>
                    <Link to={`/topic/games`}><li><span><MdSportsEsports /></span> Games</li></Link>
                    <Link to={`/topic/handmade`}><li><span><GiSewingNeedle /></span> Handmade</li></Link>
                    <Link to={`/topic/music`}><li><span><BsMusicNoteBeamed /></span> Music</li></Link>
                    <Link to={`/topic/role-play`}><li><span><FaTheaterMasks /></span> Role Play</li></Link>
                    <Link to={`/topic/sports`}><li><span><MdSportsFootball /></span> Sports</li></Link>
                    <Link to={`/topic/technology`}><li><span><GiTechnoHeart /></span> Technology</li></Link>
                </ul>
            </div>
        )
    }

}

export default withRouter(SideBar);