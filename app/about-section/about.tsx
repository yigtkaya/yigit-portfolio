import React from "react";
import "../animations/animate.css";
import Image from "next/image";
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

      <div className="mx-auto flex w-[90%] flex-col items-left justify-left lg:max-w-[1220px]">
        <h3 className="mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#333] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]">
          About Me
        </h3>
        <div className="mx-auto flex w-[100%] flex-col">
          <div className="mb-10 flex-w[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#333] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:text-[24px]">
            <AnimatedBody
              text={
                "I'm a passionate Mobile App Developer with expertise in crafting robust applications for both iOS and Android platforms. With over two years of hands-on experience, I've had the opportunity to work on diverse projects that have enriched my technical skillset and problem-solving abilities."
              }
            />
            <AnimatedBody
              text={
                "My journey in software development has been marked by successful implementations of various technologies, from Flutter and Dart to Kotlin and Java. I take pride in writing clean, efficient code and have a strong foundation in integrating mobile applications with backend services."
              }
              className="mt-4"
            />
            <AnimatedBody
              text={
                "As a Computer Engineering graduate from Bahcesehir University, I bring both theoretical knowledge and practical experience to my work. My capstone project involved developing AI models for micro-swimmers in magnetic fields, showcasing my ability to tackle complex technical challenges."
              }
              className="mt-4"
            />
            <AnimatedBody
              text={
                "Currently, I'm focused on developing innovative mobile solutions at Mobilist Bilişim A.Ş, where I work on multiple high-impact projects including Parakolay, Amber, and Kerim Çelik. I'm particularly experienced in implementing state management solutions, deep linking, and creating seamless user experiences."
              }
              className="mt-4"
            />
            <AnimatedBody
              text={
                "I'm always eager to learn new technologies and believe in the power of continuous improvement. Whether it's blockchain development or artificial intelligence, I enjoy exploring new domains that push the boundaries of what's possible in software development."
              }
              className="mt-4"
            />
          </div>

          <div className="mb-24 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 bg-white/50 p-6 rounded-lg">
              <h3 className="text-[24px] text-[#333] md:text-[30px] lg:text-[24px] font-bold mb-4">
                Knowledgeable In
              </h3>
              <AnimatedBody
                text={
                  "Flutter, Dart, Kotlin, Java, Swift, SwiftUI, React Native, Firebase, REST APIs, GraphQL, Supabase, SQL, NoSQL, Blockchain, Solidity, Hardhat, Truffle"
                }
                className="min-h-[100px]"
              />
            </div>
            <div className="flex flex-col gap-4 bg-white/50 p-6 rounded-lg">
              <h3 className="text-[24px] text-[#333] md:text-[30px] lg:text-[24px] font-bold mb-4">
                Languages
              </h3>
              <AnimatedBody
                text={
                  "Turkish, English"
                }
                className="min-h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
