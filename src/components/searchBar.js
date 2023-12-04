import React, { useState } from "react";

function SearchBar() {
  const [input, setinput] = useState("");
  const handleChange = (e) => {
    setinput(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} className="input-box"></input>
    </>
  );
}

export default SearchBar;
