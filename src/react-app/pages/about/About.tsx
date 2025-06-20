import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import EarthImg from "../../assets/media/about/Earth.jpeg";
import "./About.css";
function About() {
  return (
    <>
    <title>About Us | Aeonix Energy</title>
    <Navbar />
    <img src={EarthImg} id="about_center_image"></img>
    <div id="about_center_image_spacer"></div>
    <Footer />
    </>
  );
}
export default About;