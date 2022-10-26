import React, { useEffect, useState } from "react";
import Item from "./Item/Item.js";
import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const SideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://lerning-platform-server-side.vercel.app/courses_categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="mt-5 ms-4 mb-4">Categories</h1>
      <div className="">
        <Link className="text-decoration-none text-dark" to="/courses">
          <Button variant="link">ALL Courses</Button>
        </Link>
      </div>
      {categories.map((Category) => (
        <Item key={Category.id} Category={Category}></Item>
      ))}
    </div>
  );
};

export default SideNav;
