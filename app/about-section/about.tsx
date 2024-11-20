import React from "react";
import "../animations/animate.css";
import Image from "next/image";
import AnimatedTitle from "../animations/animated-title";
import AnimatedBody from "../animations/animated-body";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#FFF] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
    >
      <Image
        src="/bg_blur-min.png"
        alt="background"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 bg-center w-full h-full bg-cover"
      />

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1220px]">
        <AnimatedTitle
          text="Uncover Our Journey: Together, We are Shaping a Promising Future."
          className={`mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#333] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]`}
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />
        <div className="mx-auto flex w-[100%] flex-col">
          <div className="mb-10 flex-w[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#333] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:text-[24px]">
            <AnimatedBody
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              }
            />
            <AnimatedBody
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              }
            />
            <AnimatedBody
              text={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-row gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#333]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text="FrontEnd Tools"
                className={
                  "text-[24px] text-[#333] md:text-[32px] lg:text-[20px] font-bold"
                }
                wordSpace={"mr-[0.025em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "NextJS, ReactJS, TailwindCSS, Framer Motion, GSAP, ThreeJS, React Three Fiber, React Three Drei, React Three Sky, React Three Fiber Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain"
                }
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text="UI Libraries"
                className={
                  "text-[24px] text-[#333] md:text-[32px] lg:text-[20px] font-bold"
                }
                wordSpace={"mr-[0.025em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "NextJS, ReactJS, TailwindCSS, Framer Motion, GSAP, ThreeJS, React Three Fiber, React Three Drei, React Three Sky, React Three Fiber Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain"
                }
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text="UI Libraries"
                className={
                  "text-[24px] text-[#333] md:text-[32px] lg:text-[20px] font-bold"
                }
                wordSpace={"mr-[0.025em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "NextJS, ReactJS, TailwindCSS, Framer Motion, GSAP, ThreeJS, React Three Fiber, React Three Drei, React Three Sky, React Three Fiber Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain, React Three GLTF Loader, React Three GLTF Loader, React Three Sky, React Three Terrain"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
