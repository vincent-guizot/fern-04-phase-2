import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login";
import AdminHome from "../pages/AdminHome";
import Register from "../pages/Register";
import AdminLayout from "../layouts/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 - Not Found</h1>,
  },
  // {
  //     path: "/",
  //     element: <div>Buyer Page</div>,
  // },
]);
export default router;
