import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts";
import { Home, CreateProduct } from "../pages";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout></Layout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/create",
        element: <CreateProduct></CreateProduct>,
      },
    ],
  },
]);

export default router;
