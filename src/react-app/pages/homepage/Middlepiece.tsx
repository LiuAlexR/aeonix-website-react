import { useEffect } from "react";
import "./Middlepiece.css";
import AOS from "aos";
// import BatteryPic from "../../assets/media/homepage/pouch-cell.png";
// import Graphic from "../../assets/media/homepage/graphic.png";
export default function Middlepiece() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div id="card-wrapper-middle">
            <div id="card5" className="card-middle" >{/*data-aos="fade-up" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="700" */}
                <h1>Powering Tomorrow's Unmanned Missions</h1>
            </div>
            <div id="card1-wrapper">
                <div id="card1" className="card-middle" >{/*data-aos="fade-right" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="00"*/ }
                    Aeonix Energy is a high-energy battery company focused on anode-free lithium battery
                    systems for drones, eVTOLs, and unmanned ground vehicles. We were founded in
                    2023 as a spin-out of Storagenergy Technologies, leveraging over a decade of battery

                    R&D, U.S. patents, and DOE/DoD funding.
                </div>
                {/* <img src={BatteryPic} id="homepage-pic-1" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="700"></img> */}
            </div>
            <div id="card2-wrapper">
                {/* <img src={Graphic} id="homepage-pic-2" data-aos="fade-right" data-aos-easing="ease" data-aos-duration="700"></img> */}
                <div id="card2" className="card-middle" >{/*data-aos="fade-left" data-aos-easing="ease" data-aos-duration="700" data-aos-delay="200"*/}
                    We don't just promise innovation—we're delivering validated performance, rapid TRL
                    advancement, and a focused path to manufacturing scale-up and deployment.
                </div>
                
            </div>
            <div className="homepage-spacer">

            </div>
            <div className="item-carousel card-middle"><h1>Proven Government &amp; Defense Alignment</h1>
        Our technology is being funded by the
        U.S. Army, Navy, Department of Energy (DOE) and drone companies, real missions, not

        just prototypes.</div>
      <div className="item-carousel card-middle"><h1>TRL Transparency</h1>Aeonix battery cells are already delivering over 500 Wh/kg at TRL

        4-5, with roadmap to TRL 6-7 via third-party validation.</div>
      <div className="item-carousel card-middle"><h1>US-Based Supply Chain and Manufacturing</h1>Spun out from Storagenergy with 10+

        years of battery R&amp;D, protected by existing patents.</div>
      <div className="item-carousel card-middle"><h1>Anode-Free Simplicity</h1>No need for complex materials processing, Aeonix’s clean

        anode-free design enables lightweight, safe, high-energy cells.</div>

        </div>
    );
}