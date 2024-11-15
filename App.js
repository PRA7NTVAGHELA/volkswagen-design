import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Headlights from "./components/Headlights";
import Interior from "./components/Interior";
import Engine from "./components/Engine";
import Summary from "./components/Summary";
import AnimatedCar from "./components/AnimatedCar";
import AdvancedCar from "./components/AdvancedCar";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/headlights" element={<Headlights />} />
        <Route path="/interior" element={<Interior />} />
        <Route path="/engine" element={<Engine />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/animated-car" element={<AnimatedCar />} />
        <Route path="/advanced-car" element={<AdvancedCar />} />
      </Routes>
    </Router>
  );
}

export default App;
