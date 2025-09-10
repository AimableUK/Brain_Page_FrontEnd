import type { RouteObject } from "react-router-dom";
import Dashboard from "../Home/Dashboard";
// import DashboardLayout from "./Layout/DashboardLayout";
// import DashboardPage from "./Overview/Dashboard";
// import Books from "./Books";
// import LendBook from "./LendBook";
// import ReturnBook from "./ReturnBook";

const dashboardRoutes: RouteObject = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    { index: true, element: <Dashboard /> },
    // { path: "books", element: <Books /> },
    // { path: "lend", element: <LendBook /> },
    // { path: "return", element: <ReturnBook /> },
  ],
};

export default dashboardRoutes;
