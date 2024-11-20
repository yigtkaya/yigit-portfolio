import { motion } from "framer-motion";
import AnimatedBody from "../animations/animated-body";
import AnimatedWords2 from "../animations/animated-word2";
import ReviewCard from "./review-card";
import { reviewDetails } from "./review-details";

const Reviews = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div className="relative mb-16 flex w-full flex-col items-center justify-center gap-10 text-[#e4ded7] sm:items-center lg:max-w-[1440px]">
        <AnimatedWords2
          title="Reviews"
          style={`flex max-w-[500px] flex-col items-start text-left pr-5
             font-extrabold uppercase leading-[0.9em] text-[#e4ded7]
             sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center
              lg:text-center text-[clamp(70px,14vw,155px)]`}
        />

        <AnimatedBody
          text="Access top-tier group mentoring plans and exclusive professional benefits for your team. 🔥"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
          wordSpace={""}
          charSpace={""}
        />
      </div>

      <motion.div className="grid w-100% max-w-[1345px] grid-cols-1 grpid-rows-6 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-2 lg:grid-rows-1">
        {reviewDetails.map((review, index) => (
          <ReviewCard key={index} {...review} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Reviews;
