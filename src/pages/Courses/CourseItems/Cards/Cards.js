import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  console.log(item);
  const { img, title, students, ratings, rating, price, author } = item;
  return (
    <div className="col-12 col-lg-6 m-0 p-3">
      <Link className="text-decoration-none" to="/">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body className="bg-dark">
            <Card.Title className="m-0 text-info">{title}</Card.Title>
            <p className="text-muted fs-6">
              <small>Author: {author}</small>
            </p>
            <p className="text-muted fs-6">
              <small>
                {" "}
                Ratings: {rating} ({ratings})
              </small>
            </p>
            <p className="text-muted fs-6">
              <small>Students: {students}</small>
            </p>
            <p className="text-muted mt-0 fs-6">
              <small className="mt-0">
                Price: <span className="text-warning">$</span>
                {price}
              </small>
            </p>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default Cards;
