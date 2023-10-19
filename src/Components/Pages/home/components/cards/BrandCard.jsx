/* eslint-disable react/prop-types */


const BrandCard = ({ brandd }) => {
  const { photo, brand } = brandd;
  return (
    <div>
      <div className="card lg:h-52 border hover:shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-semibold lg:text-left lg:card-title">{brand}</h2>
        </div>
        <figure>
          <img
            src={photo}
            alt="Shoes"
            className="w-40 p-10 hidden lg:block bg-[#FFFFFF]"
          />
        </figure>
      </div>
    </div>
  );
};

export default BrandCard;
