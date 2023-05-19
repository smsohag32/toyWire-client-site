import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/Singup/Singup";
import AddToy from "../pages/AddToy/AddToy";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys/AllToys";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "alltoys",
        element: <AllToys />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singUp",
        element: <SingUp />,
      },
      {
        path: "add-toy",
        element: <AddToy />,
      },
    ],
  },
]);

export default routes;
