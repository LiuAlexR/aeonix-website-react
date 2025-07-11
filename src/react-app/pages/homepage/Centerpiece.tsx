import logo from "../../assets/logos/aeonix.png";
//import DroneVideo from "../../assets/media/homepage/drone_video.mp4";
import DroneImage from "../../assets/media/homepage/drone-watering-fields-2.png"
import "./Centerpiece.css";
export default function Centerpiece() {
    return (
        <div id="centerpiece">
            {/* <video muted loop autoPlay id="background_video"><source src={DroneVideo} type="video/mp4" /></video> */}
            <img src={DroneImage} id="background_video"></img>
            <div id="video_overlay"></div>
            <div id="center_text">
                <h1>
                    Powering<br />the Future
                </h1>
            </div>
            <div className="video_spacer"></div>
            <img id="centered_logo" src={logo} />
        </div>
    )
}