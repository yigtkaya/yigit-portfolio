import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import AnimatedWords2 from "../animations/animated-word2";
import Image from "next/image";
import AnimatedBody from "../animations/animated-body";
import Link from "next/link";
import { bodyAnimation } from "../animations/animations";
const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="initial"
      animate="animate"
      className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-16"
    >
      <Image
        src="/bg_blur-min.png"
        alt="bg"
        width={1920}
        height={1080}
        className="absolute left-0 top-0 bg-center w-full h-full bg-cover pointer-events-none"
      />

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        {/** title */}
        <div
          className={`flex flex-col items-start justify-center relative w-full sm:items-center lg:max-w-[1440px]`}
        >
          <AnimatedWords2
            title="Let's Connect"
            style="flex  pb-4 max-w-[500px] flex-col items-start text-left text-[60px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[80px] md:text-[100px] lg:text-center lg:text-[140px] xl:text-[160px]"
          />
        </div>
        <div className="mt-20 pt-1 flex w-full flex-col items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className="flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "Got a question, propasal, project or want to work together on something?"
              }
              className={`-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4`}
            />

            <div className="bor der mt-5 flex w-[298px] items-center gap-1 md:w-[335px] md:gap-2.5">
              <Link
                href="/"
                target="_blank"
                aria-label="Send me an email"
                className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[170px] md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text="Send me an email"
                  className={"bor der w-[190px] pr-[40px] md:w-[170px] md:pr-0"}
                />
              </Link>
              <AnimatedBody
                text="or"
                className={
                  "bor der -mb-1 ml-2 inline-block overflow-hidden sm:-mb-2 md:-ml-[8px] md:-mb-3 lg:-mb-4"
                }
              />
              <Link
                href="https://cal.com/"
                target="_blank"
                aria-label="Send me an email"
                className="bor der mt-1 w-[110px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:-ml-[3px] md:w-[120px] lg:mt-4"
              >
                <AnimatedBody
                  text={"Book a call"}
                  className={"w-[110px] md:w-[120px]"}
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px] relative z-20">
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
      </div>
    </motion.section>
  );
};

export default Contact;
