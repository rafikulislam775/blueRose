import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
