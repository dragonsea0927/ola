import { motion } from 'framer-motion';


interface ScrollToViewProps {
  children: React.ReactNode;
}

function ScrollToView({ children }: ScrollToViewProps) {
  const divVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div>
      <motion.div
        id={id}
        variants={divVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default ScrollToView;
