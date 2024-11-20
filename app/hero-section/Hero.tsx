import React from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/boy.png";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { bodyAnimation, imageAnimation } from "../animations/animations";
import { AnimatedWords } from "../animations/animated-words";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.section
      className="relative
        flex h-screen
        w-full items-center
        justify-center
        bg-[url('/heros.jpg')]
        bg-cover bg-center py-0"
      id="home"
      initial="initial"
      animate="animate"
    >
      <Image
        src="/background.png"
        alt="bg"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 bg-center w-full h-full bg-cover z-0 pointer-events-none"
      />
      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        {/** connect button */}
        <div>
          <Link href="#contact" onClick={handleScroll}>
            <motion.button
              className="hidden rounded-full border-[#e4ded7] border-2 py-2 px-4
                       font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              Lets Connect
            </motion.button>
          </Link>
        </div>

        {/** socials */}
        <div className="flex gap-10 text-[#e4ded7] sm:gap-6 md:gap-8 lg:gap-8">
          <Link
            href="https://www.github.com/yigtkaya"
            target="_blank"
            aria-label="View My Github"
          >
            <motion.p variants={bodyAnimation}>
              <AiOutlineGithub size={24} />
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/hasanyigitkaya/"
            target="_blank"
            aria-label="View My Linkedin"
          >
            <motion.p variants={bodyAnimation}>
              <AiOutlineLinkedin size={24} />
            </motion.p>
          </Link>
          <Link
            href="https://x.com/ygitkaya"
            target="_blank"
            aria-label="View My Twitter"
          >
            <motion.p variants={bodyAnimation}>
              <AiOutlineTwitter size={24} />
            </motion.p>
          </Link>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative flex flex-col items-center justify-center pt-10">
          <motion.div
            className="absolute bottom-[-120px] mx-auto sm:bottom-[-130px] md:bottom-[-160px] lg:bottom-[-190px]"
            variants={imageAnimation}
          >
            <AnimatedWords
              title="Hasan Yigit Kaya"
              style="inline-block overflow-visible pt-1 pb-4 font-sans"
            />
            <Image
              src={profile}
              priority
              data-blobity-tooltip="Yigit Kaya"
              data-blobity-tooltip-position="top"
              data-blobity-invert="false"
              alt="profile"
              className="w-[120px] grayscale hover:grayscale-0 sm:w-[150px] md:w-[180px] lg:w-[220px] rounded-full z-20"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between">
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Creative Developer, Web Designer Freelancer, Frontend Developer, UI/UX
            Designer
          </p>
        </motion.div>
        <motion.div
          className="max-w-[500px] lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-right">
            With 20 years of experience, I have been working on web design andaa
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}