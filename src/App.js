import "./App.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Router";

function App() {
  return (
    <div className="mx-auto bg-[#EBEBEB] dark:bg-black min-h-screen">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
