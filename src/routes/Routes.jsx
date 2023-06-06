import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/SEC/Register";
import LogIn from "../pages/SEC/LogIn";
import Error from "../pages/Error/Error";
import Details from "../libs/Rooms/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/details/:id",
        element: <Details />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
