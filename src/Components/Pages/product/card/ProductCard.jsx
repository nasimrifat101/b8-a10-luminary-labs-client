/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({ phone }) => {
  const { name, brand, image, rating, price, type, _id } = phone;

  return (
    <div>
      <div className="card card-compact border hover:shadow-2xl">
        <figure>
          <img src={image} className="h-40 p-3" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="flex justify-between">
            <p>
              Price: <span className="text-xl font-bebas">${price}</span>
            </p>
            <p>
              Ratings: <span className="text-xl font-bebas">{rating}/10</span>
            </p>
          </div>
          <div className="flex justify-between">
            <p>
              Brand: <span className="text-xl font-bebas">{brand}</span>
            </p>
            <p>
              Type: <span className="text-xl font-bebas">{type}</span>
            </p>
          </div>
          <div className="card-action">
            <Link to={`/details/${_id}`}>
              <button className="btn w-full mb-2 btn-accent">Show Details</button>
            </Link>
           <Link to={`/update/${_id}`}>
             <button className="btn w-full btn-">Update</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
