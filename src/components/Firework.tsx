// src/components/Firework.tsx
import React from "react";
import { motion } from "framer-motion";

const Firework: React.FC<{ onAnimationComplete: () => void }> = ({
  onAnimationComplete,
}) => {
  const fireworkVariants = {
    initial: { scale: 0, opacity: 1 },
    explode: {
      scale: 1.5,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        onComplete: onAnimationComplete,
      },
    },
  };

  return (
    <motion.div
      className="firework"
      initial="initial"
      animate="explode"
      variants={fireworkVariants}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "20px",
        height: "20px",
        backgroundColor: "red",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

export default Firework;
