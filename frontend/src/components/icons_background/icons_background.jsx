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
                        <p className="background-icon" key={`MdSportsEsports1${i}`}><MdSportsEsports /></p>
                        <p className="background-icon" key={`FaRegAddressBook1${i}`}><FaRegAddressBook /></p>
                        <p className="background-icon" key={`FaBalanceScale1${i}`}><FaBalanceScale /></p>
                        <p className="background-icon" key={`BsThermometerHalf1${i}`}><BsThermometerHalf /></p>
                        <p className="background-icon" key={`FaRegCommentDots1${i}`}><FaRegCommentDots /></p>
                        <p className="background-icon" key={`FaHourglassEnd1${i}`}><FaHourglassEnd /></p>
                        <p className="background-icon" key={`FaRegBell1${i}`}><FaRegBell /></p>
                        <p className="background-icon" key={`BsBicycle1${i}`}><BsBicycle /></p>
                        <p className="background-icon" key={`ImBullhorn1${i}`}><ImBullhorn /></p>
                        <p className="background-icon" key={`MdComputer1${i}`}><MdComputer /></p>
                        <p className="background-icon" key={`FaBolt1${i}`}><FaBolt /></p>
                        <p className="background-icon" key={`BsEnvelope1${i}`}><BsEnvelope /></p>
                        <p className="background-icon" key={`GiShrimp1${i}`}><GiShrimp /></p>
                        <p className="background-icon" key={`FaGlasses1${i}`}><FaGlasses /></p>
                        <p className="background-icon" key={`FaGlobeAmericas1${i}`}><FaGlobeAmericas /></p>
                        <p className="background-icon" key={`BsGift1${i}`}><BsGift /></p>
                        <p className="background-icon" key={`FaGraduationCap1${i}`}><FaGraduationCap /></p>
                        <p className="background-icon" key={`FaRegHeart1${i}`}><FaRegHeart /></p>
                        <p className="background-icon" key={`FaAnchor1${i}`}><FaAnchor /></p>
                        <p className="background-icon" key={`GiConverseShoe1${i}`}><GiConverseShoe /></p>

                        <p className="background-icon" key={`MdSportsEsports2${i}`}><MdSportsEsports /></p>
                        <p className="background-icon" key={`FaRegAddressBook2${i}`}><FaRegAddressBook /></p>
                        <p className="background-icon" key={`FaBalanceScale2${i}`}><FaBalanceScale /></p>
                        <p className="background-icon" key={`BsThermometerHalf2${i}`}><BsThermometerHalf /></p>
                        <p className="background-icon" key={`FaRegCommentDots2${i}`}><FaRegCommentDots /></p>
                        <p className="background-icon" key={`FaHourglassEnd2${i}`}><FaHourglassEnd /></p>
                        <p className="background-icon" key={`FaRegBell2${i}`}><FaRegBell /></p>
                        <p className="background-icon" key={`BsBicycle2${i}`}><BsBicycle /></p>
                        <p className="background-icon" key={`ImBullhorn2${i}`}><ImBullhorn /></p>
                        <p className="background-icon" key={`MdComputer2${i}`}><MdComputer /></p>
                        <p className="background-icon" key={`FaBolt2${i}`}><FaBolt /></p>
                        <p className="background-icon" key={`BsEnvelope2${i}`}><BsEnvelope /></p>
                        <p className="background-icon" key={`GiShrimp2${i}`}><GiShrimp /></p>
                        <p className="background-icon" key={`FaGlasses2${i}`}><FaGlasses /></p>
                        <p className="background-icon" key={`FaGlobeAmericas2${i}`}><FaGlobeAmericas /></p>
                        <p className="background-icon" key={`BsGift2${i}`}><BsGift /></p>
                        <p className="background-icon" key={`FaGraduationCap2${i}`}><FaGraduationCap /></p>
                        <p className="background-icon" key={`FaRegHeart2${i}`}><FaRegHeart /></p>
                        <p className="background-icon" key={`FaAnchor2${i}`}><FaAnchor /></p>
                        <p className="background-icon" key={`GiConverseShoe2${i}`}><GiConverseShoe /></p>
                    </div>
                    <div>
                        <p className="background-icon" key={`MdSportsEsports3${i}`}><MdSportsEsports /></p>
                        <p className="background-icon" key={`FaRegAddressBook3${i}`}><FaRegAddressBook /></p>
                        <p className="background-icon" key={`FaBalanceScale3${i}`}><FaBalanceScale /></p>
                        <p className="background-icon" key={`BsThermometerHalf3${i}`}><BsThermometerHalf /></p>
                        <p className="background-icon" key={`FaRegCommentDots3${i}`}><FaRegCommentDots /></p>
                        <p className="background-icon" key={`FaHourglassEnd3${i}`}><FaHourglassEnd /></p>
                        <p className="background-icon" key={`FaRegBell3${i}`}><FaRegBell /></p>
                        <p className="background-icon" key={`BsBicycle3${i}`}><BsBicycle /></p>
                        <p className="background-icon" key={`ImBullhorn3${i}`}><ImBullhorn /></p>
                        <p className="background-icon" key={`MdComputer3${i}`}><MdComputer /></p>
                        <p className="background-icon" key={`FaBolt3${i}`}><FaBolt /></p>
                        <p className="background-icon" key={`BsEnvelope3${i}`}><BsEnvelope /></p>
                        <p className="background-icon" key={`GiShrimp3${i}`}><GiShrimp /></p>
                        <p className="background-icon" key={`FaGlasses3${i}`}><FaGlasses /></p>
                        <p className="background-icon" key={`FaGlobeAmericas3${i}`}><FaGlobeAmericas /></p>
                        <p className="background-icon" key={`BsGift3${i}`}><BsGift /></p>
                        <p className="background-icon" key={`FaGraduationCap3${i}`}><FaGraduationCap /></p>
                        <p className="background-icon" key={`FaRegHeart3${i}`}><FaRegHeart /></p>
                        <p className="background-icon" key={`FaAnchor3${i}`}><FaAnchor /></p>
                        <p className="background-icon" key={`GiConverseShoe3${i}`}><GiConverseShoe /></p>

                        <p className="background-icon" key={`MdSportsEsports4${i}`}><MdSportsEsports /></p>
                        <p className="background-icon" key={`FaRegAddressBook4${i}`}><FaRegAddressBook /></p>
                        <p className="background-icon" key={`FaBalanceScale4${i}`}><FaBalanceScale /></p>
                        <p className="background-icon" key={`BsThermometerHalf4${i}`}><BsThermometerHalf /></p>
                        <p className="background-icon" key={`FaRegCommentDots4${i}`}><FaRegCommentDots /></p>
                        <p className="background-icon" key={`FaHourglassEnd4${i}`}><FaHourglassEnd /></p>
                        <p className="background-icon" key={`FaRegBell4${i}`}><FaRegBell /></p>
                        <p className="background-icon" key={`BsBicycle4${i}`}><BsBicycle /></p>
                        <p className="background-icon" key={`ImBullhorn4${i}`}><ImBullhorn /></p>
                        <p className="background-icon" key={`MdComputer4${i}`}><MdComputer /></p>
                        <p className="background-icon" key={`FaBolt4${i}`}><FaBolt /></p>
                        <p className="background-icon" key={`BsEnvelope4${i}`}><BsEnvelope /></p>
                        <p className="background-icon" key={`GiShrimp4${i}`}><GiShrimp /></p>
                        <p className="background-icon" key={`FaGlasses4${i}`}><FaGlasses /></p>
                        <p className="background-icon" key={`FaGlobeAmericas4${i}`}><FaGlobeAmericas /></p>
                        <p className="background-icon" key={`BsGift4${i}`}><BsGift /></p>
                        <p className="background-icon" key={`FaGraduationCap4${i}`}><FaGraduationCap /></p>
                        <p className="background-icon" key={`FaRegHeart4${i}`}><FaRegHeart /></p>
                        <p className="background-icon" key={`FaAnchor4${i}`}><FaAnchor /></p>
                        <p className="background-icon" key={`GiConverseShoe4${i}`}><GiConverseShoe /></p>
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