import React from "react";

const Slider = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="carousel rounded-box mb-20">
        <div className="carousel-item w-full">
          <img
            src="https://i.postimg.cc/4yXtB80R/Desktop-1.png"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://i.postimg.cc/T1QbSV8L/Desktop-1-2.png"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
