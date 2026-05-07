'use client';
import { motion } from 'framer-motion';

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Animated = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Animated;
