import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Carousel.css";
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
      <div className="item-carousel">Item 1</div>
      <div className="item-carousel">Item 2</div>
      <div className="item-carousel">Item 3</div>
      <div className="item-carousel">Item 4</div>
      <div className="item-carousel">Item 5</div>
      <div className="item-carousel">Item 6</div>
      <div className="item-carousel">Item 7</div>
    </Carousel>
  );
}