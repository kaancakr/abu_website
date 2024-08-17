import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../globals.css";

const ImageCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      centerMode
      centerSlidePercentage={40}
      showArrows={false}
      showIndicators={false}
    >
      <div className="carousel-slide">
        <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div className="carousel-slide">
        <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div className="carousel-slide">
        <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;