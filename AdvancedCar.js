import React, { useState } from "react";
import { motion } from "framer-motion";

function AdvancedCar() {
  const [carColor, setCarColor] = useState("#007ACC");

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Interactive Car Customization</h2>

      {/* Car Animation */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        style={{
          width: "400px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <motion.div
          animate={{ x: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="400"
            height="200"
            viewBox="0 0 800 400"
          >
            <rect x="100" y="150" width="600" height="100" fill={carColor} />
            <circle cx="200" cy="270" r="40" fill="black" />
            <circle cx="600" cy="270" r="40" fill="black" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Color Picker */}
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#007ACC",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
          onClick={() => setCarColor("#007ACC")}
        >
          Blue
        </button>
        <button
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#FF5733",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
          onClick={() => setCarColor("#FF5733")}
        >
          Red
        </button>
        <button
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#28A745",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
          onClick={() => setCarColor("#28A745")}
        >
          Green
        </button>
      </div>
    </div>
  );
}

export default AdvancedCar;
