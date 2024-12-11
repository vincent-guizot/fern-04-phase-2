import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts";
import { Homepage, CreateProduct, DetailProduct } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "",
        element: <Homepage></Homepage>,
      },
      {
        path: "/create",
        element: <CreateProduct></CreateProduct>,
      },
      {
        path: "/detail/:id",
        element: <DetailProduct></DetailProduct>,
      },
    ],
  },
]);

export default router;
