import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Doctors from "@/pages/Doctors";
import DoctorDetails from "@/pages/DoctorDetails";
import Patients from "@/pages/Patients";
import NotFound from "@/pages/NotFound";
import DashboardLayout from "@/components/layout/DashboardLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "doctors/:id",
        element: <DoctorDetails />,
      },
      {
        path: "patients",
        element: <Patients />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
