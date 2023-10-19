import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import MyCard from "./card/MyCard";


const Mycart = () => {
 const [products, setProducts] = useState([])
  const [totalAmount, setTotalAmount] = useState(0);


  useEffect(()=>{
    fetch('http://localhost:5000/cart')
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      setProducts(data)
    })
  },[])

  useEffect(() => {
    const total = products.reduce((accumulator, product) => {
      return accumulator + parseFloat(product.phone.price);
    }, 0);
    setTotalAmount(total);
  }, [products]);
  

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="max-w-6xl mx-auto grid gap-5 grid-cols-4">
          <div className="col-span-3 grid grid-cols-3 gap-3">
            {products.map((product, index) => (
              <MyCard key={index} product={product}></MyCard>
            ))}
          </div>
          <div className="col-span-1 bg-[#F9FCFF] w-full p-3">
            <div className="space-y-3">
              <h1 className="text-2xl font-bebas">
                Total Items: {products.length}
              </h1>
              <hr className="border-2" />
              <div className="text-sm">
                {products.map((item, index) => (
                  <li key={index}>{item.phone.name}</li>
                ))}
              </div>
              <hr className="border-2" />
              <h1 className="text-2xl font-bebas">
                Total:{" "}
                <span className="text-3xl font-bebas">${totalAmount}</span>
              </h1>
            </div>
            <button className="btn btn-accent w-full mt-5">Pay now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycart;
