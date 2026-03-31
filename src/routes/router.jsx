import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../page/Home";
import NewDetails from "../page/NewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <NewDetails />,
      },
    ],
  },
]);

export default router;