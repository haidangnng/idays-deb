import { createBrowserRouter } from "react-router-dom";
import Auth from "./auth";
import ErrorPage from "./error-page";
import Dashboard from "@/routes/dashboard";
import MainLayout from "./main-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default router;
