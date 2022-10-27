import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContex";
import logo from "../../images/logo.png";
import SideNav from "../Courses/SideNav/SideNav";
import { FaSun, FaMoon } from "react-icons/fa";
const NavBar = () => {
  const { user, LogOut } = useContext(AuthContext);

  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(true);
  };
  const togglelight = () => {
    setDark(false);
  };

  return (
    <Navbar
      className="bg-warning"
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          {/* ------------------------------------------------- */}
          <NavLink
            className=" text-dark fw-bolder text-decoration-none"
            to="/home"
          >
            <img style={{ width: "110px" }} src={logo} alt="" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {/* -------------------------------------------- */}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
              className="text-decoration-none  fw-bold m-1"
              to="/home"
            >
              Home
            </NavLink>
            {/* -------------------------------------------- */}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
              className="text-decoration-none  fw-bold m-1"
              to="/courses"
            >
              Courses
            </NavLink>
            {/* ------------------------------------------------ */}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
              className="text-decoration-none  fw-bold m-1"
              to="/faq"
            >
              FAQ
            </NavLink>
            {/* ----------------------------------------------------- */}
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
              className="text-decoration-none  fw-bold m-1"
              to="/blogs"
            >
              Blogs
            </NavLink>
          </Nav>

          {/* ------------------------------------------------- */}
          <div className="d-block d-md-block d-lg-none ">
            <SideNav></SideNav>
          </div>
          {/* ------------------------------------------------- */}

          <div className="ms-3 d-flex">
            <div>
              {!user?.email ? (
                <div>
                  <Link
                    to="/login"
                    className="btn btn-dark text-decoration-none text-white fw-bold me-3"
                  >
                    Login
                  </Link>
                  <Link
                    to="register"
                    className="btn btn-dark text-decoration-none text-white fw-bold"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div>
              {user?.email ? (
                <div>
                  <img
                    data-bs-placement="bottom"
                    title={user.displayName}
                    style={({ width: "50px" }, { height: "50px" })}
                    className=" rounded-circle me-3"
                    src={user?.photoURL}
                    alt="Profile"
                  />
                  <button
                    className="btn btn-dark text-decoration-none text-white fw-bold"
                    onClick={LogOut}
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="ms-3">
            {dark ? (
              <button
                onClick={togglelight}
                className="btn bg-transparent border-0 text-dark text-white fs-5 mb-2"
              >
                <FaMoon />
              </button>
            ) : (
              <button
                onClick={toggleDark}
                className="btn bg-transparent border-0 text-dark text-white fs-5  mb-2"
              >
                <FaSun />
              </button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
