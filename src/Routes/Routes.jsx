import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashBoard from "../Layout/DashBoard";
import ViewPlayer from "../Pages/ViewPlayer/ViewPlayer";
import Movie from "../Pages/Movie/Movie";
import Blog from "../Pages/Blog/Blog";
import User from "../Pages/User/User";
import AddItem from "../Pages/DashBoard/AddItem/AddItem";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import TvShows from "../Pages/TvShows/TvShows";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
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
        path: "login",
        element: <AuthLayout />,
      },
      {
        path: "register",
        element: <AuthLayout />
      },      
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contact",
        element: <Contact />
      },

      {

        path: "viewPlayer/:id",
        element: <ViewPlayer></ViewPlayer>,
        loader: ({ params }) => fetch(`https://video-streaming-server-sigma.vercel.app/allMovies/${params.id}`)

      },
      {
        path: "/movie/viewPlayer/:id",
        element: <ViewPlayer></ViewPlayer>,
        loader: ({ params }) => fetch(`https://video-streaming-server-sigma.vercel.app/allMovies/${params.id}`)

      },
      {
        path: '/movie',
        element: <Movie />
      },
      {
        path: '/user',
        element: <User></User>
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "additem",
        element: <AddItem></AddItem>,
      }
    ],
  },
]);
