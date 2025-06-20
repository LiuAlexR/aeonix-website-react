import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import EarthImg from "../../assets/media/about/Earth.jpeg";
import "./Products.css";
function Products() {
  return (
    <>
    <title>Products | Aeonix Energy</title>
    <Navbar />
    <img src={EarthImg} id="about_center_image"></img>
    <div id="about_center_image_spacer"></div>
    <Footer />
    </>
  );
}
export default Products;