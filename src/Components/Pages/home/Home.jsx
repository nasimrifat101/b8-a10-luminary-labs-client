import Navbar from "../navbar/Navbar";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Featured from "./components/Featured";
import SaleBanner from "./components/SaleBanner";
import WhyChoseeUs from "./components/WhyChoseeUs";
// import Footer from "./components/Footer";

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Brands></Brands>
           <Featured></Featured>
           <SaleBanner></SaleBanner>
           <WhyChoseeUs></WhyChoseeUs>
           {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;