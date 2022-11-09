import { createBrowserRouter } from "react-router-dom";
import AllService from "../AllService/AllService";
import ServiceDetails from "../AllService/ServiceDetails/ServiceDetails";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Main from "../layOut/Main";
import SignIn from "../logIn/SignIn";

import ErrorPage from "../pages/ErrorPage";
import SignUp from "../Register/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <AllService></AllService>,
        loader: () => fetch("http://localhost:5000/service"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/service/${params.id}`),
      },
    ],
  },
]);
export default router;
