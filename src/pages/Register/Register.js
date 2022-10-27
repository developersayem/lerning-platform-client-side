import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Contexts/UserContex";

const Register = () => {
  const { creteUser, updateUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password);
    creteUser(email, password)
      .then((result) => {
        updateUser(name, photoURL)
          .then(() => alert("profile updated successfully"))
          .cacth((err) => console.error(err));
        setSuccess(true);
        form.reset();
      })
      .cacth((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <Form className="border p-5 w-75" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Full Name" />
        </Form.Group>
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
        </Form.Group>
        <div>
          <Form.Text className="text-muted">
            Already have an account? <Link to="/login">Log in</Link>
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

export default Register;
