// src/components/AnimatedCar.js
import React from "react";
import { motion } from "framer-motion";

const AnimatedCar = () => {
  return (
    <motion.div
      animate={{
        x: [0, 50, -50, 0], // Moves left and right
        rotate: [0, 10, -10, 0], // Tilts slightly
      }}
      transition={{
        duration: 2,
        repeat: Infinity, // Loops the animation
      }}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "#007ACC",
        borderRadius: "10px",
        margin: "auto",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "black",
          position: "absolute",
          bottom: "-25px",
          left: "20px",
        }}
      />
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "black",
          position: "absolute",
          bottom: "-25px",
          right: "20px",
        }}
      />
    </motion.div>
  );
};

export default AnimatedCar;
