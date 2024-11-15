import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Volkswagen Customizer</h1>
      <p>Customize your car like never before!</p>
      <button onClick={() => navigate("/headlights")}>Start Designing</button>
    </div>
  );
}

export default LandingPage;
