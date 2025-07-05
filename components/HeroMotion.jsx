"use client";

import { motion } from "framer-motion";

export default function HeroMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6, ease: "easeIn" },
      }}
      className="py-6 xl:py-0"
    >
    </motion.div>
  );
}
