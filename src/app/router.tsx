import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);