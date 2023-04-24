import { motion } from 'framer-motion';

interface ScrollToViewProps {
  children: React.ReactNode;
  dataTarget?: string;
}

function ScrollToView({ children, dataTarget }: ScrollToViewProps) {
  const divVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      // scale: 0,
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
        data-target={dataTarget}
        variants={divVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ScrollToView;
