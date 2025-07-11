import './SponsorCardTop.css';
import PNNL from "../../assets/media/homepage/sponsorLogos/pnnl.svg";
import Dod from "../../assets/media/homepage/sponsorLogos/DoD.png";
export default function SponsorCardTop() {
    return (
        <div id="sponsor-card-wrapper">
            <div id="sponsor-card-text">
                Trusted. Proven. The Future.
            </div>
            <div className="logo-wrapper">
                <img src={PNNL} className='sponsor-logo'></img>
                <img src={Dod} className='sponsor-logo'></img>
            </div>


        </div>
    );
}