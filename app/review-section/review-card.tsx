import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import slash from "../../public/shape-3.png";
import { ReviewProps } from "./review-details";


const ReviewCard = ({
  name,
  role,
  company,
  image,
  review,
  index,
}: ReviewProps) => {
  const abbreviateName = (name: string): string => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName[0]}. ${lastName}`;
  };

  return (
    <motion.div
    initial={{opacity: 0, y:10}}
    whileInView={{
        opacity:1,
        y:0,
        transition:{
            delay:0.1 * index,
            duration:0.7,
            ease: [0.44, 0, 0.22, 0.99]
        }
    }}
    viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex h-[473px] w-[100%] 
    flex-col items-start justify-between rounded-[24px]
     border-[1px] hover:border-white transition-all
      duration-300 border-[#212531] bg-transparent p-[28px]
       sm:h-[450px] sm:items-center sm:justify-start lg:h-[420px]
        lg:max-w-[438px]"
    >
      <Image
        src={slash}
        alt="slash"
        className="absolute top-[34px] left-[28px] w-[50px]"
      />
      <p className="mt-20 text-[#e4ded7] text-[18px] font-medium loading-relaxed tracking-wide">
        {review}
      </p>
      <div className="flex gap-3 sm:absolute sm:bottom-[28px] sm:left-[28px]">
        <Image
          src={image}
          alt={name}
          width={1600}
          height={840}
          className="w-[50px] h-[41px] rounded-full bg-contain bg-center object-cover"
        />
        <div className="flex flex-col gap-1 pr-7">
          <h3 className="w-[175px] text-[23px] font-bold uppercase leading-[21px] tracking-[-0.5px] text-[#e4ded7]">
            {abbreviateName(name)}
          </h3>
          <p className="text-sm font-normal leading-[16px] text-[#e4ded7]">
            {role} @ {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
