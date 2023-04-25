import React from 'react';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll'

interface Props {
  to: string;
  children: React.ReactNode;
}

const ScrollToView: React.FC<Props> = ({ to, children }) => {
  return (
    <Element name={to}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Element>
  );
};

export default ScrollToView;

