import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-5">Frequently asked questions!</h1>
      <div>
        <Accordion defaultActiveKey="0" flush>
          {/* ------------item-1-------------------------- */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Smart Edu?</Accordion.Header>
            <Accordion.Body className="bg-dark text-muted">
              Smart Edu is an online learning and teaching marketplace with over
              54 million students. Learn programming, marketing, data science
              and more. Taught smart edu courses by experts to help you learn
              new skills.
              <p>
                <Link>See more</Link>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* ------------item-2-------------------------- */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>How Smart Edu works?</Accordion.Header>
            <Accordion.Body className="bg-dark text-muted">
              to use our site first pick a course that you want to learn.Then
              purchase the course and start learning.
              <p>
                <Link>See more</Link>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* ------------item-3-------------------------- */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can i get scholarship through Smart Edu?
            </Accordion.Header>
            <Accordion.Body className="bg-dark text-muted">
              Yes.You can get scholarship through Smart Edu in world-wide.
              <p>
                <Link>See more</Link>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          {/* ------------item-4-------------------------- */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can i get Certificate?</Accordion.Header>
            <Accordion.Body className="bg-dark text-muted">
              Yes. When you complete your course we will give you a Certificate.
              <p>
                <Link>See more</Link>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
