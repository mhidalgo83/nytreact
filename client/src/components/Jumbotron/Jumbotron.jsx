import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">
        Welcome to the New York Times article search!
      </h1>
      <p className="lead">
        Type in any search terms to find related articles in the form below.
      </p>
    </div>
  </div>
);
export default Jumbotron;
