import React from "react";
import { Button } from "react-bootstrap";
import hero from "../../images/hero-img.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" container mt-5 pt-5 d-flex flex-sm-column flex-lg-row">
      <div className="w-50 m-3 border">
        <img style={{ width: "100%" }} src={hero} alt="" />
      </div>
      <div className="w-50 m-3 mt-5 pt-4 ">
        <h2>Smart Edu Grow Anytime Anywhere.</h2>
        <p>
          Smart Edu is an online learning and teaching marketplace with over 54
          million students. Learn programming, marketing, data science and more.
          Taught smart edu courses by experts to help you learn new skills.
        </p>
        <Button variant="warning">
          <Link className="text-decoration-none text-white" to="/courses">
            Explore Courses
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
