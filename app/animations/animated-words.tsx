import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

export const Hero = () => (
  <section
    className="relative z-10 flex h-screen w-full items-stretch justify-center bg-cover bg-center py-0"
    style={{ backgroundImage: "url('/heros.jpg')" }}
    id="home"
  >
    <Image
      src="/background.png"
      alt="bg"
      width={1920}
      height={1080}
      className="absolute top-0 left-0 bg-center w-full h-full bg-cover"
    />
    <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
      <div>
        <Link href="#">
          <button className="hidden rounded-full border-[#e4ded7] border-2 py-2 px-4 font-semibold text-[#e4ded7] sm:block md:text-[16px] lg:block">
            Lets Connect
          </button>
        </Link>
      </div>
      <div className="flex gap-10 text-[#e4ded7] sm:gap-6 md:gap-8 lg:gap-8">
        <Link
          href="https://www.github.com/yigtkaya"
          target="_blank"
          aria-label="View My Github"
        >
          <p>
            <AiOutlineGithub size={24} />
          </p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/hasanyigitkaya/"
          target="_blank"
          aria-label="View My Linkedin"
        >
          <p>
            <AiOutlineLinkedin size={24} />
          </p>
        </Link>
        <Link
          href="https://x.com/ygitkaya"
          target="_blank"
          aria-label="View My Twitter"
        >
          <p>
            <AiOutlineTwitter size={24} />
          </p>
        </Link>
      </div>
    </div>
  </section>
);
