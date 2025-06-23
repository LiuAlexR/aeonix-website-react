import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import Centerpiece from "./Centerpiece";
import SponsorCardTop from "./SponsorCardTop";
import SpinningImage from "./SpinningImage";
import Middlepiece from "./Middlepiece";
import ImageWithText from "./ImageWithText";
import Carousel from "./Carousel";
function Home() {
  return (
    <>
      <title>Home | Aeonix Energy</title>
      <Navbar />
      <Centerpiece />
      
      <SpinningImage />
      <Middlepiece />
      <SponsorCardTop />
      <ImageWithText />
      <Carousel />
      <Footer />
    </>
  );
}

export default Home;
