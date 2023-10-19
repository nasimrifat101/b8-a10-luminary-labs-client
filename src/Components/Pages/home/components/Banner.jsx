const Banner = () => {
  return (
    <div className="bg-[#F9FCFF] lg:h-[500px]">
      <div className="grid lg:grid-cols-2 max-w-6xl mx-auto">
        <div className="p-5 lg:pt-24 space-y-5">
          <p className="lg:text-2xl">
            Embrace the future today with the latest gadgets, smart devices, and
            powerful electronics.
          </p>
          <h1 className="text-3xl lg:text-7xl font-bebas">
          Your journey to innovation starts here.
          </h1>
        </div>
        <div className="">
            <img src="https://i.postimg.cc/d30Q5MKN/kindpng-4596705.png" className="p-5 lg:pt-28" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
