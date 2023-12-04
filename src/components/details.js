import React from "react";
import { severity, duration } from "./helper";
function Details() {
  return (
    <div className="details-container">
      <div className="severity">
        <p className="title">Severity</p>
        {severity.map((e) => {
          return (
            <div className="form-check">
              <input type="radio" value="option1" />
              <label className="form-check-label" for="exampleRadios1">
                {e}
              </label>
            </div>
          );
        })}
      </div>
      <br />
      <div className="duration">
        <p>Duration</p>
        {duration.map((e) => {
          return (
            <div className="form-check">
              <input type="radio" value="option1" />
              <label className="form-check-label" for="exampleRadios1">
                {e}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Details;
