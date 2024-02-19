import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Recruit from "../components/Recruit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "recruit",
        element: <Recruit></Recruit>,
      },
    ],
  },
]);
export default router;
