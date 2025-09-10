import { useRoutes } from "react-router-dom";
import landingRoutes from "./pages/landing/Layout/LandingRoutes";
import dashboardRoutes from "./pages/dashboard/Layout/DashboardRoutes";

const AppRoutes = () => {
  // Merge them
  const routes = useRoutes([landingRoutes, dashboardRoutes]);
  return routes;
};

export default AppRoutes;
