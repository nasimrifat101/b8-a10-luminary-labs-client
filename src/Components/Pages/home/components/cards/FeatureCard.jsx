/* eslint-disable react/prop-types */
const FeatureCard = ({ item }) => {
  const { name, brand, price, image } = item;

  return (
    <div>
      <div className="card card-compact bg-base-100 hover:shadow-xl border">
        <figure>
          <img src={image} alt="Shoes" className="h-32 p-3" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">{name}</h2>
          <div className="flex justify-between">
            <p>{brand}</p>
            <p>${price}</p>
          </div>
          <button className="btn btn-sm btn-accent">buy now</button>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
