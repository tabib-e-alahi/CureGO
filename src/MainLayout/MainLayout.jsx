import { Outlet } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
import Promotion from "../SharedComponents/Promotion";

const MainLayout = () => {
    return (
        <div className="bg-[#f6f4f1] ">
            <Promotion></Promotion>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;