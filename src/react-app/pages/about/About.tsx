import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import EarthImg from "../../assets/media/about/Earth.jpeg";
import "./About.css";
import OurTeam from "./OurTeam";
import PersonCards from "./PersonCards";
function About() {
  return (
    <>
      <title>About Us | Aeonix Energy</title>
      <Navbar />
      <div>
        <img src={EarthImg} id="about_center_image"></img>

        <OurTeam />
      </div>
      <div id="about_center_image_spacer"></div>
      <PersonCards />
      <Footer />
      
    </>
  );
}
export default About;