import React from "react";
import "../../styles/icons_background.scss";
import { MdSportsEsports } from "react-icons/md";
import { FaRegAddressBook } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { BsThermometerHalf } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { FaHourglassEnd } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { BsBicycle } from "react-icons/bs";
import { FaBolt } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { ImBullhorn } from "react-icons/im";
import { FaGlasses } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsGift } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { GiShrimp } from "react-icons/gi";
import { FaAnchor } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";


class IconsBackground extends React.Component {
    constructor(props) {
        super(props);
        
        this.icons = this.icons.bind(this);
    }

    icons() {
        let icons = [];
        for (let i = 0; i < 25; i++) {
            icons.push(
                <div className="row">
                    <div>
                        <p><MdSportsEsports /></p>
                        <p><FaRegAddressBook /></p>
                        <p><FaBalanceScale /></p>
                        <p><BsThermometerHalf /></p>
                        <p><FaRegCommentDots /></p>
                        <p><FaHourglassEnd /></p>
                        <p><FaRegBell /></p>
                        <p><BsBicycle /></p>
                        <p><ImBullhorn /></p>
                        <p><MdComputer /></p>
                        <p><FaBolt /></p>
                        <p><BsEnvelope /></p>
                        <p><GiShrimp /></p>
                        <p><FaGlasses /></p>
                        <p><FaGlobeAmericas /></p>
                        <p><BsGift /></p>
                        <p><FaGraduationCap /></p>
                        <p><FaRegHeart /></p>
                        <p><FaAnchor /></p>
                        <p><GiConverseShoe /></p>

                        <p><MdSportsEsports /></p>
                        <p><FaRegAddressBook /></p>
                        <p><FaBalanceScale /></p>
                        <p><BsThermometerHalf /></p>
                        <p><FaRegCommentDots /></p>
                        <p><FaHourglassEnd /></p>
                        <p><FaRegBell /></p>
                        <p><BsBicycle /></p>
                        <p><ImBullhorn /></p>
                        <p><MdComputer /></p>
                        <p><FaBolt /></p>
                        <p><BsEnvelope /></p>
                        <p><GiShrimp /></p>
                        <p><FaGlasses /></p>
                        <p><FaGlobeAmericas /></p>
                        <p><BsGift /></p>
                        <p><FaGraduationCap /></p>
                        <p><FaRegHeart /></p>
                        <p><FaAnchor /></p>
                        <p><GiConverseShoe /></p>
                    </div>
                    <div>
                        <p><MdSportsEsports /></p>
                        <p><FaRegAddressBook /></p>
                        <p><FaBalanceScale /></p>
                        <p><BsThermometerHalf /></p>
                        <p><FaRegCommentDots /></p>
                        <p><FaHourglassEnd /></p>
                        <p><FaRegBell /></p>
                        <p><BsBicycle /></p>
                        <p><ImBullhorn /></p>
                        <p><MdComputer /></p>
                        <p><FaBolt /></p>
                        <p><BsEnvelope /></p>
                        <p><GiShrimp /></p>
                        <p><FaGlasses /></p>
                        <p><FaGlobeAmericas /></p>
                        <p><BsGift /></p>
                        <p><FaGraduationCap /></p>
                        <p><FaRegHeart /></p>
                        <p><FaAnchor /></p>
                        <p><GiConverseShoe /></p>

                        <p><MdSportsEsports /></p>
                        <p><FaRegAddressBook /></p>
                        <p><FaBalanceScale /></p>
                        <p><BsThermometerHalf /></p>
                        <p><FaRegCommentDots /></p>
                        <p><FaHourglassEnd /></p>
                        <p><FaRegBell /></p>
                        <p><BsBicycle /></p>
                        <p><ImBullhorn /></p>
                        <p><MdComputer /></p>
                        <p><FaBolt /></p>
                        <p><BsEnvelope /></p>
                        <p><GiShrimp /></p>
                        <p><FaGlasses /></p>
                        <p><FaGlobeAmericas /></p>
                        <p><BsGift /></p>
                        <p><FaGraduationCap /></p>
                        <p><FaRegHeart /></p>
                        <p><FaAnchor /></p>
                        <p><GiConverseShoe /></p>
                    </div>
                </div>
            )
        }
        return icons;
    }

    render() {

        return (
            <section>
                { this.icons() }
            </section>
        )
    }
}

export default IconsBackground;