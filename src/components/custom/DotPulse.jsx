import { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';

import './DotPulse.css';

const DotPulse = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const pulseAnimation = (controls, delay = 0) => {
    controls.start({
      scale: [1, 1.3, 1],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 2,
        ease: "linear",
        loop: Infinity,
        repeatDelay: delay,
      }
    });
  };

  useEffect(() => {
    pulseAnimation(controls1);
    pulseAnimation(controls2, 0.75);
    pulseAnimation(controls3, 1.5);
  }, [controls1, controls2, controls3]);

  return (
    <div className="dotContainer">
      <motion.div className="dot" animate={controls1} />
      <motion.div className="dot" animate={controls2} />
      <motion.div className="dot" animate={controls3} />
    </div>
  );
};

export default DotPulse;
