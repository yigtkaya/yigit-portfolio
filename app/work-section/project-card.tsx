import { motion, useScroll, useTransform } from "framer-motion";
import { devProjects, ProjectDetailProps } from "./project-detail";
import Image from "next/image";
import AnimatedTitle from "../animations/animated-title";
import { useRef } from "react";
import AnimatedBody from "../animations/animated-body";

const ProjectCard = ({
  id,
  name,
  description,
  techStack,
  image,
  available,
}: ProjectDetailProps) => {
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
        backgroundColor: "#222",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={`relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[550px] md:w-[100%] lg:h-[400px]`}
      initial="hidden"
      animate="aniamte"
    >
      <Image
        src={image}
        alt={name}
        width={1920}
        height={1080}
        className={`absolute -bottom-2 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[55%] ${
          id % 2 === 0 ? "right-0" : "left-0"
        }`}
      />

      <div className={`absolute text-white ${!(id % 2 === 0) ? "right-0 top-20 mr-0 ml-10 md:right-0 md:ml-0 lg:right-0 lg:top-20 lg:mr-4" 
        : "left-10 top-20 ml-0 md:mr-12 lg:top-20 lg:ml-4"}`}>

      <AnimatedTitle
        text={name}
        wordSpace={"mr-[0.25em]"}
        charSpace={"mr-[0.01em]"}
        className={`max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none`}
      />

      <AnimatedBody
        text={description}
        wordSpace={"mr-[0.25em]"}
        charSpace={"mr-[0.01em]"}
        className={`mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D]`}
      />

      <div className="mt-9 flex gap-4">
        {techStack.map((tech, id) => (
          <AnimatedTitle
            text={tech}
            className={
              "text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px]"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"mr-[0.01em]"}
            key={id}
          ></AnimatedTitle>
        ))}
      </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
