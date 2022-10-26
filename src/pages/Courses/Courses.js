import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav/SideNav";

const Courses = () => {
  return (
    <div className="d-flex container ">
      <div className="w-25">
        <SideNav></SideNav>
      </div>
      <div className="w-75 mt-5 pt-3 ms-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Courses;
