import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import DroneImg from "../../assets/media/contact/Drone.jpg";
import "./Admin.css";
import AddNewsWrapper from "./AddNewsWrapper";
import RemoveNewsWrapper from "./RemoveNewsWrapper";
import AddProductsWrapper from "./AddProductsWrapper";
import RemoveProductsWrapper from "./RemoveProductsWrapper";


export default function Admin() {
    

    return (
        <>
            <Navbar />
            <img src={DroneImg} id="admin-center-image"></img>
            <div id="admin-center-image-spacer"></div>
           <AddNewsWrapper />
           <div className="spacer-admin"></div>
           <RemoveNewsWrapper />
           <div className="spacer-admin"></div>
           <AddProductsWrapper />
           <div className="spacer-admin"></div>
           <RemoveProductsWrapper />
           <div className="spacer-admin"></div>
           <div className="spacer-admin"></div>
           <div className="spacer-admin"></div>
            <Footer />  
        </>
    )
}