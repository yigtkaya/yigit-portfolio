import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedWords2Props = {
  title: string;
  style: string;
};

const AnimatedWords2: React.FC<AnimatedWords2Props> = ({
  title,
  style,
}: AnimatedWords2Props) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation2 = {
    hidden: {
      opacity: 0,
      y: 150,
    },
    visible: {  // Changed from 'animate' to 'visible' to match ctrls.start("visible")
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <h1 aria-label={title} role="heading">
      <motion.span
        ref={ref}
        initial="hidden"
        animate={ctrls}
        variants={wordAnimation2}
        className={style}
      >
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={ctrls}
            transition={{
              delayChildren: 0.25 * index,
              staggerChildren: 0.05,
            }}
            className="flex items-center justify-center overflow-hidden last:-mr-10 pb-2 sm:pb-0"
          >
            <motion.span
              variants={wordAnimation2}
              className="-mb-4 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3"
            >
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedWords2;
