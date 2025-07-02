import "./ImageWithText.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import City from "../../assets/media/homepage/Salt Lake City.jpeg";
import { useEffect } from "react";
export default function ImageWithText() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div id="wrapper">
            <img src={City} id="image"></img>
            <div id="image-overlay"></div>
            <div id="image-text">
                <h1 data-aos="fade-left" data-aos-easing="ease" data-aos-duration="700">The Crossroads of the West</h1>
                <p data-aos="fade-left" data-aos-easing="ease" data-aos-duration="700 " data-aos-delay="300">Nestled in the heart of Salt Lake City, we are connected with industries from across the country</p>
            </div>
        </div>
    );

}