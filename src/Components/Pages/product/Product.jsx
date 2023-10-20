import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ProductCard from "./card/ProductCard";
import NoData from "../error/NoData";
import LoadingPage from "../error/LoadingPage";
import Slider from "./Slider";

const Product = () => {
    const { brand } = useParams();
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://luminary-labs-server-bl6h611nx-nasimrifat101.vercel.app/phone/${brand}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPhones(data);
                setLoading(false);
            })
    }, [brand])

    return (
        <div>
            <Navbar />
            {phones.length > 0 && <Slider />}
            {loading ? (
                <LoadingPage />
            ) : phones.length > 0 ? (
                <div className="max-w-6xl mx-auto p-3 lg:p-0 grid lg:grid-cols-4 gap-4">
                    {phones.map(phone => <ProductCard key={phone._id} phone={phone} />)}
                </div>
            ) : (
                <NoData />
            )}
        </div>
    );
};

export default Product;
