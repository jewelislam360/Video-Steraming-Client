import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashBoard from "../Layout/DashBoard";
import WatchList from "../Pages/DashBoard/WatchList/WatchList";
import ViewPlayer from "../Pages/ViewPlayer/ViewPlayer";
import Movie from "../Pages/Movie/Movie";
import Blog from "../Pages/Blog/Blog";
import TvShows from "../Pages/TvShows/TvShows";

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
        path: '/tvshows',
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
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "watchlist",
        element: <WatchList></WatchList>,
      },
    ],
  },
]);
