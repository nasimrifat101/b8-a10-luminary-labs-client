import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ProductCard from "./card/ProductCard";
import NoData from "../error/NoData";
import LoadingPage from "../error/LoadingPage";

const Product = () => {
    const { brand } = useParams();
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/phone/${brand}`)
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
            {loading ? (
                <LoadingPage></LoadingPage>
            ) : phones.length > 0 ? (
                <div className="max-w-6xl mx-auto grid grid-cols-4 gap-4">
                    {phones.map(phone => <ProductCard key={phone._id} phone={phone} />)}
                </div>
            ) : (
                <NoData />
            )}
        </div>
    );
};

export default Product;
