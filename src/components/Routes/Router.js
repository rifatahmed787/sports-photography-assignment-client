import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [],
  },
]);
export default router;
