const Newsletter = () => {
  return (
    <div className="bg-[#f8fffa] h-[200px] lg:h-[300px] mb-20">
      <div className="flex justify-center items-center flex-col">
        <h1 className="lg:text-4xl font-young mt-20">
          Subscribe to our news letter
        </h1>
        <p className="text-xs lg:text-md">for better deals and offers</p>
        <div className="form-control lg:mt-10">
          <div className="input-group hidden lg:block">
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered lg:w-[300px]"
            />
            <button className="btn bg-black lg:w-[140px] text-white">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
