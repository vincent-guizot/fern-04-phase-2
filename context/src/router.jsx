import { createBrowserRouter } from "react-router-dom";
import { Home, Create } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/create",
    element: <Create></Create>,
  },
]);

export default router;
