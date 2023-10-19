/* eslint-disable react/prop-types */


const BrandCard = ({ brandd }) => {
  const { photo, brand } = brandd;
  return (
    <div>
      <div className="card h-52 bg-[#F9FCFF] hover:shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
        </div>
        <figure>
          <img
            src={photo}
            alt="Shoes"
            className="w-40 p-10 bg-[#FFFFFF]"
          />
        </figure>
      </div>
    </div>
  );
};

export default BrandCard;
