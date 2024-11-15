import React from "react";
import { useNavigate } from "react-router-dom";

function Summary() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Summary of Your Customization</h2>
      <ul>
        <li>Headlights: LED</li>
        <li>Interior: Leather</li>
        <li>Engine: V8</li>
      </ul>
      <button onClick={() => navigate("/")}>Start Over</button>
    </div>
  );
}

export default Summary;
