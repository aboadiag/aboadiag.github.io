import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ArtPage } from "./screens/ArtPage";
import { Home } from "./screens/Home";
import { Projects } from "./screens/Projects";
import { Research } from "./screens/Research";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ArtPage />,
  },
  {
    path: "/artpage",
    element: <ArtPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/research",
    element: <Research />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
