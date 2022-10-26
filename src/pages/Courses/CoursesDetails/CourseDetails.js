import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { FaFileDownload } from "react-icons/fa";
import { Button } from "react-bootstrap";

const CourseDetails = () => {
  const data = useLoaderData();
  const {
    img,
    title,
    students,
    ratings,
    rating,
    price,
    author,
    details,
    language,
  } = data;
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [4, 5],
  };
  return (
    <div ref={ref} className="d-grid bg-dark">
      <div className="row">
        <div className="col-6  text-white p-5">
          <h1 className="mb-3">{title}</h1>
          <h4 className="text-muted">{details}</h4>
          <p className="text-muted">
            created by <Link>{author}</Link>
          </p>
          <p className="text-muted">
            {rating} (<Link>{ratings} </Link>) Ratings
          </p>
          <p className="text-muted">{students} students</p>
          <p className="text-muted">Language: {language}</p>
          <h4 className="text-muted fw-bolder">
            Price: <span className="text-warning">$</span>
            {price}
          </h4>
        </div>
        <div className="col-6 text-white p-5">
          <div className="d-flex">
            <div className="me-5">
              <img className="w-100" src={img} alt="" />
            </div>
            <div>
              <Pdf
                targetRef={ref}
                filename="Course-Details.pdf"
                options={options}
              >
                {({ toPdf }) => (
                  <button onClick={toPdf} className="btn btn-primary">
                    <FaFileDownload className="fs-1"></FaFileDownload>
                  </button>
                )}
              </Pdf>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center  pb-5">
          <Button variant="warning" className="w-25">
            <Link
              className="text-decoration-none text-dark fw-bold"
              to="/chackout"
            >
              Get Premium Access
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
