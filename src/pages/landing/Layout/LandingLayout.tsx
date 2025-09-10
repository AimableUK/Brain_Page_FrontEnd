import { Outlet } from "react-router-dom";
import Header from "../includes/Header";
import Footer from "../includes/Footer";

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
