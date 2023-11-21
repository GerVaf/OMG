import React from "react";
import { motion} from "framer-motion";

const Marque = () => {
  const containerVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        },
      },
    },
  };

  return (
    <div className="m-5" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        className="text-[100px] font-bold"
        variants={containerVariants}
        initial="animate"
        animate="animate"
        style={{ display: "inline-block" }}
      >
        LEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEegasgaewrbwawhasrhberaw4vwffffffffffffffffffffffffffffffffffff
      </motion.div>
    </div>
  );
};

export default Marque;
