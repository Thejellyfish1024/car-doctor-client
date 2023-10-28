import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import CheckOut from "../pages/CheckOut/CheckOut";
import MyOrders from "../pages/MyOrders/MyOrders";

export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/services/:id',
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/services/checkOut/:id',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/myOrders',
          element:<MyOrders></MyOrders>
        }
      ]
    },
  ]);