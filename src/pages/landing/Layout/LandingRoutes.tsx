import type { RouteObject } from "react-router-dom";
import LandingLayout from "./LandingLayout";
import Home from "../Home/Home";
import Pricing from "../Pricing/Pricing";
// import About from "./About";
// import Contact from "./Contact";

const landingRoutes: RouteObject = {
  path: "/",
  element: <LandingLayout />,
  children: [
    { index: true, element: <Home /> },
    { path: "pricing", element: <Pricing /> },
    // { path: "contact", element: <Contact /> },
  ],
};

export default landingRoutes;
