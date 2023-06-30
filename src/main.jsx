import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";

import AuthProvider from "./context/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import routes from "./routes/Routes";
// aow animation library
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false,
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={routes}></RouterProvider>
  </AuthProvider>
);
