import React from "react";

function Filter() {
  return (
    <div className="filter-container">
      <label className="filter">Filter</label>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Filter;
