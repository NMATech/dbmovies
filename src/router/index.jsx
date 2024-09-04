import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Layout from "../layout/Layout";
import Details from "../pages/Details";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);
