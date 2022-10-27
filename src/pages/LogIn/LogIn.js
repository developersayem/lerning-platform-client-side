import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Contexts/UserContex";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [success, setSuccess] = useState(false);

  const { LogInUser } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    LogInUser(email, password).then((result) => {
      setSuccess(true);
      form.reset();
      Navigate(from, { replace: true });
    });
  };
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <Form className="border p-5 w-75" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div>
          <Form.Text className="text-muted">
            Need an account? <Link to="/register">Register</Link>
          </Form.Text>
        </div>
        <div className="d-flex mt-3 justify-content-center w-100">
          <Button className="w-100 fw-bold" variant="warning" type="submit">
            Register
          </Button>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <p className="fw-bold">OR</p>
        </div>
        <div className="d-flex justify-content-between w-100">
          <Button className="w-50 me-3" variant="outline-success" type="submit">
            <FaGoogle />
          </Button>
          <Button className="w-50 ms-3" variant="outline-dark" type="submit">
            <FaGithub />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LogIn;
