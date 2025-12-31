import React from "react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* orange blob  */}
      <motion.div
        animate={{
          y: [0, -80, 0],
          x: [0, 60, 0],
          scale: [1, 1.5, 1],
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-coral-400/20 rounded-full blur-3xl"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Pink Blob with dramatic movement */}
      <motion.div
        animate={{
          y: [0, 100, 0],
          x: [0, -80, 0],
          scale: [1, 0.6, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 left-10 w-[32rem] h-[32rem] bg-gradient-to-br from-pink-400/30 to-rose-400/20 rounded-full blur-3xl"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* turquoise blob  */}
      <motion.div
        animate={{
          y: [0, -100, 0],
          x: [0, 90, 0],
          scale: [1, 1.4, 1],
          opacity: [0.7, 1, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-br from-cyan-400/30 to-teal-400/20 rounded-full blur-3xl"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* purple blob */}
      <motion.div
        animate={{
          y: [0, 70, 0],
          x: [0, -60, 0],
          scale: [1, 1.5, 1],
          opacity: [1.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-violet-400/20 rounded-full blur-3xl"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/*  orange shapes  */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-yellow-400/20 to-orange-400/15 rounded-full blur-2xl"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/*  pink purple shape  */}
      <motion.div
        animate={{
          opacity: [0, 1, 0],
          scale: [1, 1.6, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/2 left-1/4 w-56 h-56 bg-gradient-to-br from-pink-400/15 to-purple-400/20 rounded-full blur-2xl"
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* another dramatic shape :) */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0],
          opacity: [0, 0.6, 0],
          scale: [0.95, 1, 0.95],
        }}
        transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        className="absolute top-2/3 right-1/2 w-64 h-64 bg-gradient-to-br from-orange-500 to-pink-500/10 rounded-full blur-3xl"
      />

      {/* Decorative Element */}
      <motion.div
        animate={{ rotate: 360, x: [20, 100, -100, 80], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block w-64 h-64 bg-gradient-to-br from-orange-400/10 to-pink-400/15 rounded-full blur-3xl absolute bottom-0 left-0"
      />
    </div>
  );
};

export default FloatingShapes;
