import { motion, useAnimation } from "framer-motion";
import { Pause } from "lucide-react";
import { useEffect } from "react";

const Marquee = ({ children, speed = 40, reverse = false }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: speed,
        ease: "linear",
      },
    });
  }, [controls, speed, reverse]);

  return (
    <div
      className=" whitespace-nowrap w-full"
      onMouseEnter={() => controls.stop()}
      onMouseLeave={() =>
        controls.start({
          x: reverse ? ["-100%", "0%"] : ["0%", "-100%"],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        })
      } // REANUDA
    >
      <motion.div
        className="flex gap-6"
        animate={controls}
        whileHover={{ scale: 1.2, rotateY: 22 }}
        transition={{
          type: "spring",
          stiffness: 300,
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
