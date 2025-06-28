import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import { ROUTE_PATH } from "./routePath";
import Programs from "../pages/Programs";
import Teachers from "../pages/Teachers";
import Introduction from "../pages/Introduction";
import Login from "../pages/Login";
import News from "../pages/News";
import ProgramDetail from "../pages/ProgramDetail";
import TeacherDetail from "../pages/TeacherDetail";
import NotFound from "../pages/NotFound";

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
      {
        path: ROUTE_PATH.TEACHERS,
        element: <Teachers />,
      },
      {
        path: ROUTE_PATH.INTRO,
        element: <Introduction />,
      },
      {
        path: ROUTE_PATH.NEWS,
        element: <News />,
      },
      {
        path: ROUTE_PATH.PROGRAM_DETAIL,
        element: <ProgramDetail />,
      },
      // {
      //   path: ROUTE_PATH.TEACHER_DETAIL,
      //   element: <TeacherDetail />,
      // },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />,
  },
]);

export default router;
