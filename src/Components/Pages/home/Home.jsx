import Navbar from "../navbar/Navbar";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
// import Footer from "./components/Footer";

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Brands></Brands>
           {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;