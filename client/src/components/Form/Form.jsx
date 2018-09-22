import React from "react";
import "./Form.css";

const Form = () => (
  <div className="card">
    <div class="card-header">Search for an article</div>
    <form>
      <div className="form-group label">
        <label for="search">Search</label>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Search"
        />
      </div>
      <div className="form-group">
        <label for="startYear">Start Year</label>
        <input
          type="text"
          className="form-control"
          id="startYear"
          placeholder="ex: 1997"
        />
      </div>
      <div className="form-group">
        <label for="endYear">End Year</label>
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="ex: 1998"
        />
      </div>
      <input class="btn btn-primary" type="submit" value="Submit" id="submit" />
    </form>
  </div>
);

export default Form;
