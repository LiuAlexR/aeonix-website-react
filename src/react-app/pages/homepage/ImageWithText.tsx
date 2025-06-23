import "./ImageWithText.css";
import City from "../../assets/media/homepage/Salt Lake City.jpeg";
export default function ImageWithText() {
    return (
        <div id="wrapper">
            <img src={City} id="image"></img>
            <div id="image-overlay"></div>
            <div id="image-text">
                <h1>The Crossroads of the West</h1>
                <p>Lorem ipsum dolor sit amet. We are in Salt Lake City. This is more filler text. Anything can go here.</p>
            </div>
        </div>
    );

}