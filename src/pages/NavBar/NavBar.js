import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContex";
import logo from "../../images/logo.png";
import SideNav from "../Courses/SideNav/SideNav";

const NavBar = () => {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user);

  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="warning"
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
                    style={({ width: "50px" }, { height: "50px" })}
                    className=" rounded me-3"
                    src={user?.photoURL}
                    alt="Profile"
                  />
                  <Link
                    className="btn btn-dark text-decoration-none text-white fw-bold"
                    onClick={LogOut}
                    to=""
                  >
                    Log Out
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
