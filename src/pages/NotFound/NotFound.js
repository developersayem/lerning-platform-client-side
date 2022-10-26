import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container ">
      <div className=" d-flex  justify-content-center">
        <img
          style={{ width: "700px" }}
          src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=1380&t=st=1666807338~exp=1666807938~hmac=fffad3a1f36296dd056a5bcc342d84c1c136f419d3d4e35dc7eaf830af96e03f"
          alt=""
        />
      </div>
      <div className="d-flex justify-content-center">
        <Link className="btn btn-warning text-decoration-none text-dark" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
