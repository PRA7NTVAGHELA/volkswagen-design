import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Headlights() {
  const [selectedHeadlight, setSelectedHeadlight] = useState("");
  const navigate = useNavigate();

  const options = ["LED", "Halogen", "Xenon"];

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Select Headlight Type</h2>
      {options.map((option) => (
        <button
          key={option}
          style={{
            margin: "10px",
            padding: "10px 20px",
            border:
              selectedHeadlight === option
                ? "2px solid blue"
                : "1px solid gray",
          }}
          onClick={() => setSelectedHeadlight(option)}
        >
          {option}
        </button>
      ))}
      <br />
      <button onClick={() => navigate("/interior")}>Next</button>
    </div>
  );
}

export default Headlights;
