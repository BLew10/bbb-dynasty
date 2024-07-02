import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  isNext: boolean;
  className?: string;
}

export default function AnimateWrapper({
  children,
  isNext,
  className = "",
}: Props) {
  return (
    <motion.div
      className={`${className} relative min-w-[350px]  bg-black bg-opacity-50 rounded-xl p-3 max-h-[100vh]`}
      initial={{ opacity: 0, x: isNext ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isNext ? -100 : 100 }}
    >
      {children}
    </motion.div>
  );
}
