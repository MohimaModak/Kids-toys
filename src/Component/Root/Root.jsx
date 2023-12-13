import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  const location = useLocation();
  console.log(location);
  const noNavbarFooter =
    location.pathname.includes("singin") ||
    location.pathname.includes("signup");
  return (
    <div className="">
      {noNavbarFooter || <Navbar></Navbar>}

      <Outlet></Outlet>
      {noNavbarFooter || <Footer></Footer>}
    </div>
  );
};

export default Root;
