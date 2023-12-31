import { useEffect, useState } from "react";
import FeatureCard from "./cards/FeatureCard";
import { Link } from "react-router-dom";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://luminary-labs-server-bl6h611nx-nasimrifat101.vercel.app/phones"
    )
      .then((res) => res.json())
      .then((data) => {
        const shuffledProducts = data.sort(() => Math.random() - 0.5);
        const selectedProducts = shuffledProducts.slice(0, 12);
        setProducts(selectedProducts);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto mb-10 lg:mb-20">
      <h1 className="text-xl text-center lg:text-left lg:text-5xl font-bold mb-10">Featured Products</h1>
      <div className="grid grid-cols-2 p-2 lg:p-0 lg:grid-cols-6 gap-3">
        {products.map((item) => (
          <Link to={`/details/${item._id}`}  key={item._id} >
            <FeatureCard item={item}></FeatureCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
