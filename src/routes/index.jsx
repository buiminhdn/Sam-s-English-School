import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      //   {
      //     path: ROUTE_PATH.BUSINESS_DETAIL,
      //     element: <BussinessDetailPage />,
      //   },
    ],
  },
]);

export default router;
