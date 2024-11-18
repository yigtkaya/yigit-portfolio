import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { wordAnimation } from "./animations";
import { useEffect } from "react";

type AnimatedWordsProps = {
  title: string;
  style: string;
};

export const AnimatedWords: React.FC<AnimatedWordsProps> = ({
  title,
  style,
}) => {
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("animate");
    }

    if (!inView) {
      ctrls.start("initial");
    }
  }, [ctrls, inView]);

  return (
    <h1 aria-label={title} role="heading">
      <motion.span
        ref={ref}
        className="
  flex max-w-[500px]
  flex-col overflow-hidden text-center text-[42px]
  font-extrabold leading-[1.2em] text-[#e4ded7]
  sm:text-[72px] sm:leading-[0.85em]                                   
  md:text-[90px] md:max-w-[900px]                                    
  lg:text-[108px] lg:leading-[0.85em]"
      >
        {" "}
        {title.split(" ").map((word, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate={ctrls}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
            className="flex items-center justify-center overflow-hidden"
          >
            <motion.span className={style} variants={wordAnimation}>
              {" "}
              {word + "\u00A0"}
            </motion.span>
          </motion.div>
        ))}
      </motion.span>
    </h1>
  );
};
