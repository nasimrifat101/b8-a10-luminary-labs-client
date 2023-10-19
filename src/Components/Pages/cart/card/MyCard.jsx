import { ToastContainer, toast } from "react-toastify";

/* eslint-disable react/prop-types */
const MyCard = ({ product }) => {
  const id = product._id
  const {name, price, brand, image, rating, type } = product.phone;

  const handleRemove = () => {
    console.log("Remove button clicked", id);
    fetch(`https://luminary-labs-server-14hdghbng-nasimrifat101.vercel.app/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Product removed from cart");
        } else {
          toast.error("Product removal failed");
        }
      });
  };

  return (
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
        <div>
          <button
            onClick={()=>handleRemove(id)}
            className="btn btn-error w-full"
          >
            Remove
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyCard;
