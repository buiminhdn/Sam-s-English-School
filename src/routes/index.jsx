import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import { ROUTE_PATH } from "./routePath";
import Programs from "../pages/Programs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTE_PATH.PROGRAMS,
        element: <Programs />,
      },
    ],
  },
]);

export default router;
