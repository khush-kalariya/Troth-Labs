import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import goals from "../assets/goals.png";
import wave from "../assets/wave.png";
import search from "../assets/search.png";
import target from "../assets/taarget.png";
import winstep from "../assets/Number.png";
import slideo from "../assets/slide.jpg";

const steps = [
  {
    imgSrc: goals,
    title: "Identify Goals",
    description:
      "Clearly define objectives and desired outcomes for the project or task at hand.",
  },
  {
    imgSrc: wave,
    title: "Research and Analysis",
    description:
      "Conduct thorough research and analysis to understand the market, audience, and relevant trends.",
    reverse: true,
  },
  {
    imgSrc: search,
    title: "Brainstorming and Ideation",
    description:
      "Engage in collaborative brainstorming sessions to generate innovative ideas and strategies.",
  },
  {
    imgSrc: target,
    title: "Planning and Execution",
    description:
      "Develop detailed plans outlining tasks, timelines, and responsibilities, then execute them efficiently.",
    reverse: true,
  },
  {
    imgSrc: winstep,
    title: "Evaluation and Adaptation",
    description:
      "Continuously monitor progress, gather feedback, and adapt strategies as needed to optimize results and achieve success.",
  },
];

function Working() {
  return (
    <>
      <div className="lg:px-18 lg:pt-20">
        <div>
          <h1 className="text-5xl leading-15">
            Our Working Process
            <br />
            How We Work For Our Customers
          </h1>

          <div className="px-10 py-32 grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1">
            {steps.map((data, index) => (
              <motion.div
                key={index}
                className={`flex flex-col ${data.reverse ? "lg:flex-col-reverse" : ""} lg:gap-25 gap-8`}
                initial={{ opacity: 0, y: 50 }} // Initial state (invisible, below)
                whileInView={{ opacity: 1, y: 0 }} // Animate to visible and move up
                transition={{ duration: 0.5, delay: index * 0.2 }} // Delay each step slightly
                viewport={{ once: true }} // Trigger animation once when in viewport
              >
                <div className="flex justify-center">
                  <img src={data.imgSrc} alt={data.title} />
                </div>
                <div className="flex flex-col gap-1 text-center">
                  <h1 className="text-[23px] font-semibold">{data.title}</h1>
                  <p className="text-[18px] text-gray-500">{data.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <marquee
          className=""
          behavior="scroll"
          direction="left"
          scrollamount="10"
          loop="infinite"
        >
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
          <img src={slideo} alt="slide" className="inline h-[400px] w-full -pt-70" />
        </marquee>
      </div>
    </>
  );
}

export default Working;
