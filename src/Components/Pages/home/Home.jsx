import Navbar from "../navbar/Navbar";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Featured from "./components/Featured";
// import Footer from "./components/Footer";

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Brands></Brands>
           <Featured></Featured>
           {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;