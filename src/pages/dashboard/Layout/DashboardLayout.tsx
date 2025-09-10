import { Outlet } from "react-router-dom";
import Header from "../includes/Header";
import Footer from "../includes/Footer";

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Nested dashboard pages render here */}
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
