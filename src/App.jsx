import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./screens/Home";
import { Projects } from "./screens/Projects";
import { Research } from "./screens/Research";
import { ArtPage } from "./screens/ArtPage";

// Define your routes
const router = createBrowserRouter([
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
