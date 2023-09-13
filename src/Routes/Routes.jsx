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

import Payment from "../Pages/Payment/Payment";
import CompletePayment from "../Pages/Payment/CompletePayment";
import AllUser from "../Pages/DashBoard/AllUser/AllUser";


import UserCard from "../Pages/User/UserCard";
import UserDashboardHome from "../Pages/User/UserDashboardHome";
import UserDashboard from "../Layout/UserDashboard";
import PrivetRoute from "./PrivetRoute";
import Action from "../Pages/Home/Action/Action";
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
        element: <AuthLayout />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "viewPlayer/:id",
        element: <ViewPlayer></ViewPlayer>,
        loader: ({ params }) =>
          fetch(
            `https://video-streaming-server-sigma.vercel.app/allMovies/${params.id}`
          ),
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "payment",
        element: <Payment />,
      },

      {
        path: "paymentComplet",
        element: <CompletePayment />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path:"/tvshows",
        element: <TvShows></TvShows>
      },
      {
        path: "/tvshows/viewPlayer/:id",
        element: <ViewPlayer></ViewPlayer>,
        loader: ({ params }) => fetch(`https://video-streaming-server-sigma.vercel.app/allMovies/${params.id}`)

      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
    children: [
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "additem",
        element: <AddItem></AddItem>,
      },
      {
        path: 'alluser',
        element: <AllUser></AllUser>
      },
      
    ],
  },
  {
    path: "userDashboard",
    element: <UserDashboard />,
    children: [
      { path: "account", element: <User /> },
      { path: "library", element: <UserDashboardHome /> },
    ],
  },
]);
