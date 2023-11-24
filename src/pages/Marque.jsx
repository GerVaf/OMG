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
    <div className="my-5" style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        className="h-[20vh] bg-white text-[100px] font-bold"
        variants={containerVariants}
        initial="animate"
        animate="animate"
        style={{ display: "inline-block" }}
      >
        OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP OPAQUE MUSIC GROUP 
      </motion.div>
    </div>
  );
};

export default Marque;
