import React from "react";
import { animate, motion } from "framer-motion";
import { exit } from "process";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number): number => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

// Here I will ender 6 motion divs, each representing a step of the stairs
const Stairs: React.FC = () => {
  return (
    <div>
      {[...Array(6)].map((_, index: number) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </div>
  );
};

export default Stairs;
