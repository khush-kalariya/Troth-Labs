import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion"; // ✅ Added
import laptop from "../assets/laptop.png";
import mange from "../assets/management-2.png";
import path from "../assets/pathway.png";
import deadline from "../assets/deadline.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="bg-[#FFE9DC] w-full h-full lg:flex lg:pt-28 pt-10">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-[40%] w-full xl:w-[50%] lg:pl-[90px] lg:flex md:px-10 sm:px-10 px-10"
      >
        <div className="lg:mr-0 xl:mr-20 w-full lg:pt-20">
          <h1 className="lg:text-[22px] w-full xl:text-[38px] text-[21px] pt-15 font-bold lg:font-semibold tracking-wide">
            "Troth Labs is a young entrepreneurial venture established in 2009
            through Troth Labs."
          </h1>

          <p className="mt-5 text-lg text-[#58585A] leading-7">
            Leveraging best-in-class people, processes, and technologies, Troth
            Labs provides high-quality, high-value software development and
            business process outsourcing services to independent software
            vendors (ISVs) and enterprises.
          </p>

          <Link to="/about">
            <button className="relative overflow-hidden px-4 py-3 mt-5 bg-[#58585A] text-white font-semibold flex items-center gap-2 rounded cursor-pointer group">
              <span className="relative z-10 flex items-center gap-2">
                Read More
                <span className="text-2xl font-semibold">
                  <FaArrowRightLong />
                </span>
              </span>
              <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full z-0" />
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="xl:w-[50%] lg:w-[60%] lg:gap-6 xl:gap-10 lg:px-8 xl:px-10 flex gap-10 w-full px-10 pb-10 flex-col md:flex-row lg:mr-10 mr-20 mb-10"
      >
        {/* Left column cards */}
        <div className="flex flex-col gap-[20px] mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded px-[30px] py-[40px]"
          >
            <div className="w-[70px] flex flex-col">
              <img src={laptop} alt="" />
            </div>
            <p className="text-[20px] mt-[12px] font-extrabold">
              High Quality Code
            </p>
            <p className="tracking-wide text-gray-500 pt-[10px]">
              High-quality code is characterized by readability, modularity,
              efficiency, and robustness, enabling easier maintenance,
              scalability, and reliability of software systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded px-[30px] py-[45px]"
          >
            <div className="w-[70px] flex flex-col">
              <img src={mange} alt="" />
            </div>
            <p className="text-[20px] mt-[12px] font-extrabold">
              Full-stack teams
            </p>
            <p className="tracking-wide text-gray-500 pt-[10px]">
              Full-stack teams consist of developers proficient in both frontend
              and backend technologies, enabling them to build end-to-end
              solutions independently, from user interfaces to server-side
              logic.
            </p>
          </motion.div>
        </div>

        {/* Right column cards */}
        <div className="flex flex-col gap-[20px] mt-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded px-[30px] py-[45px]"
          >
            <div className="w-[70px] flex flex-col">
              <img src={path} alt="" />
            </div>
            <p className="text-[20px] mt-[12px] font-extrabold">
              Agile Approach
            </p>
            <p className="tracking-wide text-gray-500 pt-[10px]">
              The Agile approach is a flexible project management methodology
              that prioritizes iterative development, collaboration, and
              adaptability to deliver value quickly and respond to change
              effectively.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="bg-white rounded px-[30px] py-[45px]"
          >
            <div className="w-[70px] flex flex-col">
              <img src={deadline} alt="" />
            </div>
            <p className="text-[20px] mt-[12px] font-extrabold">Flexibility</p>
            <p className="tracking-wide text-gray-500 pt-[10px]">
              Flexibility is the capacity to adjust or adapt easily to changing
              circumstances, requirements, or situations, enabling individuals
              or organizations to respond effectively and thrive in dynamic
              environments.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
