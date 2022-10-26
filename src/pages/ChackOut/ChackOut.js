import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const ChackOut = () => {
  const data = useLoaderData();
  const { title, price } = data;

  return (
    <div className="container">
      <div className="d-grid mt-5">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5">
            <Card className="">
              <Card.Body>
                <h4 className="d-flex justify-content-center mt-4">
                  Product Name:-
                </h4>
                <Card.Title className="d-flex justify-content-center m-3">
                  {title}
                </Card.Title>
                <div className="d-flex bg-dark text-white m-3 p-3 rounded justify-content-between">
                  <p>Price </p>
                  <p>${price}</p>
                </div>
                <div className="d-flex bg-dark text-white m-3 p-3 rounded justify-content-between">
                  <p>Vat</p>
                  <p>20%</p>
                </div>
                <div className="d-flex bg-dark text-white m-3 p-3 rounded justify-content-between">
                  <p>You have to pay </p>
                  <p>
                    <span>$</span> 200
                  </p>
                </div>
              </Card.Body>
            </Card>
          </div>
          {/* ------------------------------------------------- */}
          <div className="col-lg-6 col-12 border rounded p-5 mb-5 ">
            <h4 className="mb-4">Credit or Debit Card</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Crad Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Number" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Expiry Date </Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>CVC/CVV</Form.Label>
                  <Form.Control type="password" placeholder="****" />
                </Form.Group>
              </div>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Agree Terms & Conditions" />
              </Form.Group>
              <div className="d-flex justify-content-center ">
                <Button className="px-4" variant="warning" type="submit">
                  Chackout
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChackOut;
