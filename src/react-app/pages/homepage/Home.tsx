import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import logo from "../../assets/logos/aeonix.png";
import DroneVideo from "../../assets/media/homepage/drone_video.mp4";
import "./Home.css";
function Home() {
  return (
    <>
    <title>Home | Aeonix Energy</title>
    <Navbar />
    <div id="centerpiece">
			<video muted loop autoPlay id="background_video"><source src={DroneVideo} type="video/mp4" /></video>
      <div id="video_overlay"></div>
      <div id="center_text">
        <h1>
          Flight<br/>Revolutionized
        </h1>
      </div>
      <div className="video_spacer"></div>
			<img id="centered_logo" src={logo} />
		</div>
    <Footer />
    </>
  );
}

export default Home;
