import { createBrowserRouter } from "react-router-dom";
import Home from "../../layouts/Main/Home";
import Main from "../../layouts/Main/Main";

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
    ],
  },
]);
const Route = () => {
  return <div></div>;
};

export default Route;
