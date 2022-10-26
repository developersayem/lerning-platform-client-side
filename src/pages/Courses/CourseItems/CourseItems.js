import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards/Cards";

const CourseItems = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="d-grid container">
      <div className="row">
        {data.map((item) => (
          <Cards key={item.id} item={item}></Cards>
        ))}
      </div>
    </div>
  );
};

export default CourseItems;
