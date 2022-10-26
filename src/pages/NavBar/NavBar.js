import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="info" variant="light">
      <Container>
        <Navbar.Brand>
          <NavLink
            className=" text-dark fw-bolder text-decoration-none"
            to="/home"
          >
            <img style={{ width: "110px" }} src={logo} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
              className="text-decoration-none  fw-bold m-1"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
              className="text-decoration-none  fw-bold m-1"
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "#545e6f",
              })}
              className="text-decoration-none  fw-bold m-1"
              to="/faq"
            >
              FAQ
            </NavLink>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
