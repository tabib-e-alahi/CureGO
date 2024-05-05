import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Footer from "../SharedComponents/Footer/Footer";
import Promotion from "../SharedComponents/Promotion";
import SpecialNav from "../SharedComponents/SpecialNav";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div className={`${noHeaderFooter ? 'bg-white' : 'bg-[#f6f4f1]'}`}>
        {noHeaderFooter && <SpecialNav></SpecialNav>}
      {noHeaderFooter || <Promotion></Promotion>}
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
