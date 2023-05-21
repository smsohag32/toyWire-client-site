import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AuthProvider from "./context/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
// aow animation library
AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={routes}></RouterProvider>
  </AuthProvider>
);
