import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Pages/ProductDestails/ProductDetails";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import MyCart from "../Pages/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path:'/products/:id',
        element:<ProductDetails></ProductDetails>
      },
      {
        path:'/myCart',
        element:<MyCart></MyCart>
      }
    ],
  },
]);

export default router;
