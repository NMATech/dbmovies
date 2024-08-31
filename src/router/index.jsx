import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Details from "../Details";

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
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);
