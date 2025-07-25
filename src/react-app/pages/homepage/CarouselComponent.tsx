import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "./Carousel.css";
export default function CarouselComponent() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel responsive={responsive} className="wrapper-carousel">
      <div className="item-carousel"><h1>Proven Government &amp; Defense Alignment</h1>
        Our technology is being funded by the
        U.S. Army, Navy, Department of Energy (DOE) and drone companies, real missions, not

        just prototypes.</div>
      <div className="item-carousel"><h1>TRL Transparency</h1>Aeonix battery cells are already delivering over 500 Wh/kg at TRL

        4-5, with roadmap to TRL 6-7 via third-party validation.</div>
      <div className="item-carousel"><h1>US-Based Supply Chain and Manufacturing</h1>Spun out from Storagenergy with 10+

        years of battery R&amp;D, protected by existing patents.</div>
      <div className="item-carousel"><h1>Anode-Free Simplicity</h1>No need for complex materials processing, Aeonix’s clean

        anode-free design enables lightweight, safe, high-energy cells.</div>
    </Carousel>
  );
}