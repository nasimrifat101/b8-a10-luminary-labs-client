import { useEffect, useState } from "react";
import BrandCard from "./cards/BrandCard";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="my-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold">Brands</h1>
        <p className="font-semibold">
          We have a wide range of products from renowned brans for you to choose
          from.{" "}
        </p>

        <div className="grid grid-cols-6 gap-5 my-8">
          {brands.map((brandd) => (
            <Link key={brandd._id} to={`/product/${brandd.brand}`}>
              <BrandCard brandd={brandd}></BrandCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
