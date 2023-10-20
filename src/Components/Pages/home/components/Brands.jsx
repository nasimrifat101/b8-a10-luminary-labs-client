import { useEffect, useState } from "react";
import BrandCard from "./cards/BrandCard";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("https://luminary-labs-server-bl6h611nx-nasimrifat101.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="my-10 lg:my-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl text-center lg:text-left lg:text-5xl font-bold">Brands</h1>

        <div className="grid grid-cols-2 p-3 lg:p-0 lg:grid-cols-6 gap-5 my-8">
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
