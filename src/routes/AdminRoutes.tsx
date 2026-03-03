import type { RouteObject } from "react-router-dom";
import PrivateRoutes from "./PrivateRoute";
import AdminLayout from "../layouts/AdminLayout";
import DashboardPage from "../pages/DashboardPage";


const isAuthenticated = true;

export const AdminRoutes : RouteObject[] = [
  {
    element: <PrivateRoutes isAuthenticated={isAuthenticated} />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          {
            path: "/admin",
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
];