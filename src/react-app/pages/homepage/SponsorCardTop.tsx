import './SponsorCardTop.css';
import FacebookLogo from "../../assets/media/homepage/sponsorLogos/Facebook.png";
import TeslaLogo from "../../assets/media/homepage/sponsorLogos/Tesla.png";
import RedditLogo from "../../assets/media/homepage/sponsorLogos/Reddit.jpeg";
import Stardew from "../../assets/media/homepage/sponsorLogos/Stardew.jpeg";
export default function SponsorCardTop() {
    return (
        <div id="sponsor-card-wrapper">
            <div id="sponsor-card-text">
                Trusted. Proven. The Future.
            </div>
            <div className="logo-wrapper">
                <img src={FacebookLogo} className='sponsor-logo'></img>
                <img src={TeslaLogo} className='sponsor-logo'></img>
                <img src={RedditLogo} className='sponsor-logo'></img>
                <img src={Stardew} className='sponsor-logo'></img>
            </div>


        </div>
    );
}