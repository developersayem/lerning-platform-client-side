import { createBrowserRouter } from "react-router-dom";
import Home from "../../layouts/Main/Home";
import Main from "../../layouts/Main/Main";
import Blogs from "../../pages/Blogs/Blogs";
import Courses from "../../pages/Courses/Courses";
import Faq from "./Faq/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
const Route = () => {
  return <div></div>;
};

export default Route;
