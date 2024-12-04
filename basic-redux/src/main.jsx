import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import toolkitStore from "./redux/toolkitStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={toolkitStore}>
      <App />
    </Provider>
  </StrictMode>
);