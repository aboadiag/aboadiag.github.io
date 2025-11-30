import React from "react";
// 1. CHANGE IMPORT
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { Projects } from "./screens/Projects";
import { Research } from "./screens/Research";
import { ArtPage } from "./screens/ArtPage";

// 2. CHANGE TO createHashRouter
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/artpage",
    element: <ArtPage />,
  },
]
// , {
// basename: "/aboadiag.github.io" // <-- **IMPORTANT: Change this to your actual repository name**
// }
);

export const App = () => {
  return <RouterProvider router={router} />;
};
