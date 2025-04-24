import { motion } from "motion/react";

type AnimatedProps = {
  hoverScale?: number | undefined,
  tapScale?: number | undefined,
  children: React.ReactNode;
}

const AnimatedDiv = ({ children, hoverScale = 1.05, tapScale = 0.95 }: AnimatedProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.2, ease: "easeInOut" }
      }}
      whileTap={{ 
        scale: tapScale,
        transition: { duration: 0.1, ease: "easeInOut" }
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedDiv;