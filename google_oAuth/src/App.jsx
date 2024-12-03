import { RouterProvider } from "react-router-dom";
import router from "./router";
import AuthContextProvider from "./context/Auth";
// import "./App.css";

function App() {
    return (
        <AuthContextProvider>
            <RouterProvider router={router} />
        </AuthContextProvider>
    );
}

export default App;
