import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedTitle from "../animations/animated-title";
import { useRef } from "react";
import AnimatedBody from "../animations/animated-body";
import { WorkDetailProps } from "./work-detail";

const WorkCard = ({
    id,
    company,
    role,
    duration,
    techStack,
    description,
}: WorkDetailProps ) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="relative z-10 w-full rounded-3xl bg-[#222] p-8 transition-colors hover:bg-[#2a2a2a]"
      initial="hidden"
      animate="animate"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <AnimatedTitle
              text={company}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              className="text-2xl font-bold text-white md:text-3xl"
            />
            <AnimatedTitle
              text={role}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              className="text-lg font-semibold text-[#95979D] md:text-xl"
            />
          </div>
          <AnimatedBody
            text={duration}
            wordSpace={"mr-[0.25em]"}
            charSpace={"mr-[0.01em]"}
            className="text-sm font-medium text-[#95979D] md:text-base"
          />
        </div>

        <AnimatedBody
          text={description}
          wordSpace={"mr-[0.25em]"}
          charSpace={"mr-[0.01em]"}
          className="text-[#95979D]"
        />

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <AnimatedTitle
              key={`${id}-${index}`}
              text={tech}
              className="rounded-full bg-[#2b2b2b] px-3 py-1 text-sm font-medium text-white"
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default WorkCard;
