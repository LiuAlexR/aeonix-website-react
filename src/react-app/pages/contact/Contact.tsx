import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import DroneImg from "../../assets/media/contact/Drone.jpg";
import "./Contact.css";
import ContactWrapper from "./ContactWrapper";


export default function Contact() {
    

    return (
        <>
            <Navbar />
            <img src={DroneImg} id="contact-center-image"></img>
            <div id="contact-center-image-spacer"></div>
           <ContactWrapper />
            <Footer />
        </>
    )
}