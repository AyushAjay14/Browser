import React, { useState } from "react";

function Button() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
    setisPaused(!isPaused);
  };
  const [isPaused, setisPaused] = useState(false);
  return (
    <button
      className={`btn ${isPaused ? "bg-blue" : "bg-black"}`}
      onClick={handleClick}>
      {isPaused ? "Play" : "Pause"}
    </button>
  );
}

export default Button;
