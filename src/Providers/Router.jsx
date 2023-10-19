import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Pages/home/Home";
import ErrorPage from "../Components/Pages/error/ErrorPage";
import Login from "../Components/Pages/auth/Login";
import Signup from "../Components/Pages/auth/Signup";
import Mycart from "../Components/Pages/cart/Mycart";
import AddProducts from "../Components/Pages/addproduct/AddProducts";
import Product from "../Components/Pages/product/Product";
import Details from "../Components/Pages/product/Details";
import Update from "../Components/Pages/product/Update";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element:<Signup></Signup>
        },
        {
            path: '/mycart',
            element:<PrivateRoute><Mycart></Mycart></PrivateRoute>,
            
        },
        {
            path: '/update/:id',
            element:<PrivateRoute><Update></Update></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/phones/${params.id}`)
        },
        {
            path: '/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`)
        },
        {
            path: '/product/:brand',
            element:<Product></Product>,
         
        },
        {
            path: '/addproducts',
            element:<PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
        },
      ]
    },
  ]);

  export default router;