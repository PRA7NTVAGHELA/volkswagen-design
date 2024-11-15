import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Engine() {
  const [selectedEngine, setSelectedEngine] = useState("");
  const navigate = useNavigate();

  const options = ["V6", "V8", "V12"];

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Select Engine Type</h2>
      {options.map((option) => (
        <button
          key={option}
          style={{
            margin: "10px",
            padding: "10px 20px",
            border:
              selectedEngine === option ? "2px solid blue" : "1px solid gray",
          }}
          onClick={() => setSelectedEngine(option)}
        >
          {option}
        </button>
      ))}
      <br />
      <button onClick={() => navigate("/summary")}>Next</button>
    </div>
  );
}

export default Engine;
