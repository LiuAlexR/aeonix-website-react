import QuarterCircle from "../../assets/media/homepage/quartercircle.png";
import Drone from "../../assets/media/homepage/Drone.png";
import "./SpinningImage.css";
export default function SpinningImage() {
    return (
        <div className='spinner-wrapper'>
            <div className='spinner-spacer'></div>
            <img src={QuarterCircle} className="spinner"></img>
            <img src={QuarterCircle} className="spinner-outer"></img>
            <img src={Drone} className='spinner-center'></img>
        </div>
    )
}