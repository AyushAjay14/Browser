import React, { useState } from "react";

function LogSection() {
  const [logs, setlogs] = useState([]);
  return (
    <>
      <div className="log-container">
        {logs.map((log) => {
          return <p>{log}</p>;
        })}
      </div>
    </>
  );
}

export default LogSection;
