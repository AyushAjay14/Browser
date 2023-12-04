import React from "react";
import Button from "./button";
import SearchBar from "./searchBar";
import Filter from "./filter";
import Details from "./details";
import LogSection from "./logSection";
function LogContainer() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="flat-container">
          <Button />
          <SearchBar />
          <Filter />
        </div>
        <div className="broad-container">
          <Details />
          <LogSection />
        </div>
      </div>
    </div>
  );
}

export default LogContainer;
