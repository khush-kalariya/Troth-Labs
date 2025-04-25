import React, { useState } from "react";
import career from "../assets/career-top-img.png";
import passion from "../assets/passion.svg";
import team from "../assets/Team.svg";
import authenticity from "../assets/Authenticity.svg";
import honest from "../assets/Honest.svg";
import { FaPlus, FaMinus } from "react-icons/fa";
import illustration from "../assets/career-img1.svg";
import Divider from "../Components/Divider";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const data2 = [
  {
    title: "PHP Developer",
    details: [
      "Highly focused individuals who are passionate about technology and make stuff work",
      "Highly focused individuals who are passionate about technology and make stuff work",
      "Highly focused individuals who are passionate about technology and make stuff work",
    ],
    vacancy: 8,
    experience: "1 To 10 Years",
  },
  {
    title: "React & Vue & Node Js Developer",
    details: [
      "Highly focused individuals who are passionate about technology and make stuff work",
      "Highly focused individuals who are passionate about technology and make stuff work",
      "Highly focused individuals who are passionate about technology and make stuff work",
    ],
    vacancy: 5,
    experience: "2 To 8 Years",
  },
];

const data = [
  {
    imgSrc: passion,
    title: "Passion",
    Description:
      "We love hiring people who are passionate about their skills and career. Someone who is hungry to learn, know and execute.",
  },
  {
    imgSrc: team,
    title: "Team Player",
    Description:
      "1 plus 1 is 11. That’s the mathematics for Team players who learn faster, add more value and have fantastic career trajectory.",
  },
  {
    imgSrc: authenticity,
    title: "Authenticity",
    Description:
      "We encourage a culture that accepts the differences and cultivates best with it. We ought to bring out the best with anything you do.",
  },
  {
    imgSrc: honest,
    title: "Honest",
    Description:
      "We love people who have clarity. Honesty is non-negotiable for us and something which we always look for.",
  },
];

function Career() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <motion.div
        className="bg-[#ffe7d9] min-h-screen py-8 px-3 lg:px-25 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-5xl text-3xl font-semibold text-black leading-tight mb-6">
            An Exciting Opportunity Awaits You
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you are dynamic, enthusiast and open to grab the opportunity
            coming your way, Aglowid is the place for you! We offer you a
            platform where you can explore the potential and turn your idea into
            innovation. Join our team now.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-140 md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={career} alt="Career" className="max-w-full h-auto" />
        </motion.div>
      </motion.div>

      {/* Section 2 - What do we look for */}
      <motion.div
        className="w-full h-75 text-center xl:px-[407px] lg:px-[250px] md:px-[140px] px-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
          <h1 className="lg:text-5xl text-4xl font-semibold">
            What do we look for?
          </h1>
          <p className="lg:text-[17px] text-[14px] text-gray-600">
            Troth is a place where you would be inspired, challenged and
            acknowledged for your distinguished work...
          </p>
        </div>
      </motion.div>

      {/* Section 3 - Cards */}
      <motion.div
        className="lg:px-36 px-3 pb-10 flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-full border flex flex-col items-center pt-20 px-7 pb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center flex-col mb-5">
                <img className="w-20" src={item.imgSrc} alt={item.title} />
                <h1 className="text-center text-2xl font-semibold pt-10">
                  {item.title}
                </h1>
              </div>
              <p className="text-center text-[17.5px] px-1 text-gray-500 mb-10">
                {item.Description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section 4 - Divider */}
      <motion.div
        className="py-15"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Divider />
      </motion.div>

      {/* Section 5 - Accordion with Illustration */}
      <motion.div
        className="flex flex-col md:flex-row items-center px-5 lg:px-20 py-20 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={illustration} alt="Interview" className="w-full" />
        </motion.div>

        <div className="w-full md:w-1/2">
          {data2.map((data, index) => (
            <motion.div
              key={index}
              className="py-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <button
                className="flex items-center gap-4 lg:text-2xl md:text-xl text-[13px] font-bold focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="bg-gray-700 text-white p-3 rounded-full">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
                {data.title}
              </button>

              {activeIndex === index && (
                <div className="mt-4 ml-9 text-gray-700 space-y-2 text-xl">
                  <ul className="list-disc ml-5 space-y-3">
                    {data.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <p className="mt-3 font-semibold">
                    <span className="text-black">vacancy :</span> {data.vacancy}
                  </p>
                  <p className="font-semibold">
                    <span className="text-black">experience :</span>{" "}
                    {data.experience}
                  </p>
                  <button className="relative overflow-hidden px-4 py-3 mt-auto bg-[#58585A] text-white font-semibold flex items-center gap-2 rounded cursor-pointer group">
                    <span className="relative z-10 text-sm flex items-center gap-2">
                      Apply Now
                      <span className="text-sm font-semibold">
                        <FaArrowRightLong />
                      </span>
                    </span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full z-0" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Divider />
      <Footer />
    </>
  );
}

export default Career;
