import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Interior() {
  const [selectedInterior, setSelectedInterior] = useState("");
  const navigate = useNavigate();

  const options = ["Leather", "Fabric", "Suede"];

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Select Interior Material</h2>
      {options.map((option) => (
        <button
          key={option}
          style={{
            margin: "10px",
            padding: "10px 20px",
            border:
              selectedInterior === option ? "2px solid blue" : "1px solid gray",
          }}
          onClick={() => setSelectedInterior(option)}
        >
          {option}
        </button>
      ))}
      <br />
      <button onClick={() => navigate("/engine")}>Next</button>
    </div>
  );
}

export default Interior;
