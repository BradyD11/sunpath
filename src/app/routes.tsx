import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Eligibility from "./pages/Eligibility";
import Resources from "./pages/Resources";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "programs", Component: Programs },
      { path: "eligibility", Component: Eligibility },
      { path: "resources", Component: Resources },
    ],
  },
]);
