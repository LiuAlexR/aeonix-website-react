import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Error404.css";
export default function Error404(){
    return (
        <>
            <Navbar />
            <div id="error-wrapper">
            <div className="error-404">
                Error 404<br/>
            </div>
            <div className="error-404-sub">
                Sorry. This page does not exist.
            </div>
            </div>
            <Footer />
        </>
    )
}