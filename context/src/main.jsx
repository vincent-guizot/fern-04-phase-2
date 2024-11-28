import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { ContextProvider } from "./context/Context.jsx";
import { FetchContextProvider } from "./context/FetchContext.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ContextProvider> */}
    <FetchContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </FetchContextProvider>
    {/* </ContextProvider> */}
  </StrictMode>
);
