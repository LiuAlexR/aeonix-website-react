import { useEffect } from "react";
import "./Middlepiece.css";
import AOS from "aos";
import BatteryPic from "../../assets/media/homepage/pouch-cell.png";
export default function Middlepiece() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id="card-wrapper-middle">
            <div id="card1-wrapper">
                <div id="card1" className="card-middle" data-aos="fade-right" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="00">
                    <h1>A Better Type of Battery</h1>

                </div>
                <img src={BatteryPic} id="homepage-pic-1" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="700"></img>
            </div>
            <div id="card2" className="card-middle" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="200">
                Using advanced ceramic materials, we have created high energy density lithium ion batteries, which feature X% better performance than conventional cells
            </div>
            <div id="card3" className="card-middle" data-aos="fade-right" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="400">
                *Example graphic based on how the battery works?*
            </div>
            <div id="card4" className="card-middle" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="600">
                *Example of usage/case studies?*
            </div>
            <div id="card5" className="card-middle" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="800">
                <h1>We are pioneering the future. <br /> Come work with us!</h1>
            </div>
        </div>
    );
}