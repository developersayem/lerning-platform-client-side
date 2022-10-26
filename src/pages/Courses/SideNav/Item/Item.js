import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ Category }) => {
  return (
    <div className="">
      <div>
        <Link
          className="text-dark mt-1 "
          to={`/courses/categories/${Category.id}`}
        >
          <Button variant="link">{Category.Name}</Button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
