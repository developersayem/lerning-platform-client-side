import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5">
      {/* ----------------------------Q-1------------------------------------- */}
      <div className="bg-dark p-5 rounded m-5">
        <h3 className="text-warning">1: What is Cors?</h3>
        <p className="text-success">
          Answer:{" "}
          <small className="text-muted">
            Cross-origin resource sharing is a mechanism that allows restricted
            resources on a web page to be requested from another domain outside
            the domain from which the first resource was served. A web page may
            freely embed cross-origin images, stylesheets, scripts, iframes, and
            videos.
          </small>
        </p>
      </div>
      {/* ----------------------------Q-2------------------------------ */}
      <div className="bg-dark p-5 rounded m-5">
        <h3 className="text-warning">
          2: why are you using firebase? what other option do you have to
          implement authentication?
        </h3>
        <p className="text-success">
          Answer:{" "}
          <small className="text-muted">
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together.
            <p>
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through cards,
              retina scans, voice recognition, and fingerprints.
            </p>
          </small>
        </p>
      </div>
      {/* -----------------------------Q-3------------------------- */}
      <div className="bg-dark p-5 rounded m-5">
        <h3 className="text-warning">1: How does private route works?</h3>
        <p className="text-success">
          Answer:{" "}
          <small className="text-muted">
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </small>
        </p>
      </div>
      {/* ------------------------------Q-4--------------------------------------- */}
      <div className="bg-dark p-5 rounded m-5">
        <h3 className="text-warning">1: What is Node? How does Node works?</h3>
        <p className="text-success">
          Answer:{" "}
          <small className="text-muted">
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </small>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
