import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
      <Container>
        <Navbar.Brand>
          <Link
            className=" text-dark fw-bolder text-decoration-none"
            to="/home"
          >
            <img style={{ width: "130px" }} src={logo} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="text-decoration-none text-white m-1" to="/home">
              Home
            </Link>
            <Link className="text-decoration-none text-white m-1" to="/courses">
              Courses
            </Link>
            <Link className="text-decoration-none text-white m-1" to="/faq">
              FAQ
            </Link>
            <Link className="text-decoration-none text-white m-1" to="/blogs">
              Blogs
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
