import { useLoaderData } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Details = () => {
  const phone = useLoaderData();
  console.log(phone);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { _id, image, name, brand, price, rating, description, type } = phone;

  const hadnleAddToCart = () => {

    if(isAddedToCart){
      toast.warning('Product already in the cart');
      return;
    }


    fetch("http://localhost:5000/cart", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ phone }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsAddedToCart(true);
        toast.success("Added to cart successfully");
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto grid lg:gap-32 lg:grid-cols-2 lg:mt-20">
        <div>
          <img src={image} className="px-10 py-10 lg:py-0 lg:px-0  w-full" alt="" />
        </div>
        <div className="bg-[#F9FCFF]">
          <div className="p-6 space-y-5 lg:p-10 lg:space-y-10">
            <h1 className="text-4xl font-bold">{name}</h1>
            <div className="flex justify-between">
              <p>
                Price:{" "}
                <span className="text-2xl font-semibold font-bebas">
                  ${price}
                </span>{" "}
              </p>
              <p>
                Rating:{" "}
                <span className="text-2xl font-semibold font-bebas">
                  {rating}/10
                </span>{" "}
              </p>
              <p>
                Type:{" "}
                <span className="text-2xl font-semibold font-bebas">
                  {type}
                </span>{" "}
              </p>
            </div>
            <div>
              <p>
                Brand:{" "}
                <span className="text-2xl font-semibold font-bebas">
                  {brand}
                </span>{" "}
              </p>
              <p>{description}</p>
            </div>
            <div>
              <button
                onClick={() => hadnleAddToCart(_id)}
                className="btn btn-accent w-full"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Details;
