import Navbar from "../navbar/Navbar";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Featured from "./components/Featured";
import SaleBanner from "./components/SaleBanner";
import WhyChoseeUs from "./components/WhyChoseeUs";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Newsletter from "./components/Newsletter";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
    });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div data-aos="fade-up">
        <Brands></Brands>
      </div>
      <div data-aos="fade-down">
        <Featured></Featured>
      </div>
      <div data-aos="fade-down">
        <SaleBanner></SaleBanner>
      </div>
      <div data-aos="fade-up">
        <WhyChoseeUs></WhyChoseeUs>
      </div>
      <div data-aos="fade-up">
       ,<Newsletter></Newsletter>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
