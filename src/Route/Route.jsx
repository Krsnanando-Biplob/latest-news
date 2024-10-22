import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import News from "../pages/News/News";
import PrivetRoute from "./PrivetRoute";
import About from "../pages/AboutUs/About";
import Career from "../pages/AboutUs/Career";


const Route = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <PrivetRoute><Home></Home></PrivetRoute>,
        loader: () => fetch('/news.json')
      },
      {
        path: '/news/:id',
        element: <PrivetRoute><News></News></PrivetRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/career',
        element: <Career></Career>
      }
    ]
  }
])
export default Route;