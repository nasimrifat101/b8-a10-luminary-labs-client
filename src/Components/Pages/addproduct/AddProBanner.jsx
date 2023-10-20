/* eslint-disable react/no-unescaped-entities */
const AddProBanner = () => {
  return (
    <div>
      <div className="hero h-[100px] lg:h-[300px] bg-[#F9FCFF]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="lg:text-5xl text-2xl font-bold"> Add Products</h1>
            <p className="py-6 hidden lg:block text-xs">
            Welcome back! If you wish to add a product, kindly complete the provided form in its entirety. Once you have filled in all the required fields, please proceed by clicking the "Add Products" button. Your submission will then be processed, and your product will be successfully added to the system. Thank you for your cooperation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProBanner;
