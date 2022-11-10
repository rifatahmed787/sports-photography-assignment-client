import { createBrowserRouter } from "react-router-dom";
import AddService from "../AddService/AddService";
import AllService from "../AllService/AllService";
import ServiceDetails from "../AllService/ServiceDetails/ServiceDetails";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Main from "../layOut/Main";
import SignIn from "../logIn/SignIn";
import MyReviews from "../MyReviews/MyReviews";

import ErrorPage from "../pages/ErrorPage";
import SignUp from "../Register/SignUp";
import PrivateRoute from "./PrivateRoute";

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
        loader: () =>
          fetch("https://react-assignment-four-server.vercel.app/service"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://react-assignment-four-server.vercel.app/${params.id}`),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
