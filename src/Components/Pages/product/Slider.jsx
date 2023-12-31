

const Slider = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="carousel rounded-box m-3 lg:m-0 lg:mb-20">
        <div className="carousel-item w-full">
          <img
            src="https://i.postimg.cc/B6zg7bbs/Desktop-1-3.png"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
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
        <div className="carousel-item w-full">
          <img
            src="https://i.postimg.cc/HL4RNw1m/Desktop-1-1.png"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
