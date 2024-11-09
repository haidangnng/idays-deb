import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "@/routes/root"
import Auth from "./auth";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Root />,
    errorElement:
      <ErrorPage />,
    children: [
      {
        path: "/",
        element:
          <Auth />,
      },
    ],
  },
  {
    path: "/auth",
    element:
      <Auth />,
  },
]);


export default router
