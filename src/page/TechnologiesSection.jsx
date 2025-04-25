// import React, { useState } from "react";
// import technology from "../assets/Technology-Img.png";
// import Divider from "../Components/divider";

// const technologies = [
//   {
//     title: "Backend Technologies & Framework",
//     items: [
//       "Php",
//       "Postgresql",
//       "Redis",
//       "WordPress",
//       "Magento",
//       "Mysql",
//       "Mongodb",
//       "Symfony",
//       "Open cart",
//     ],
//   },
//   {
//     title: "Frontend Technologies",
//     items: [
//       "HTML5",
//       "CSS3",
//       "JavaScript",
//       "React",
//       "Angular",
//       "Vue.js",
//       "Tailwind CSS",
//       "Bootstrap",
//     ],
//   },
//   {
//     title: "DevOps Automations & Build Systems",
//     items: [
//       "Vagrant",
//       "Ansible",
//       "Grunt",
//       "Docker",
//       "Brunch",
//       "Vue.js",
//       "Tailwind CSS",
//       "Bootstrap",
//     ],
//   },
//   {
//     title: "Process Control Systems & Message Queueing",
//     items: [
//       "Vagrant",
//       "Ansible",
//       "Grunt",
//       "Docker",
//       "Brunch",
//       "Vue.js",
//       "Tailwind CSS",
//       "Bootstrap",
//     ],
//   },
//   {
//     title: "Dependency Management & Optimizing Assets",
//     items: [
//       "Vagrant",
//       "Ansible",
//       "Grunt",
//       "Docker",
//       "Brunch",
//       "Vue.js",
//       "Tailwind CSS",
//       "Bootstrap",
//     ],
//   },
//   {
//     title: "Testing & Quality Control",
//     items: [
//       "Vagrant",
//       "Ansible",
//       "Grunt",
//       "Docker",
//       "Brunch",
//       "Vue.js",
//       "Tailwind CSS",
//       "Bootstrap",
//     ],
//   },
// ];

// const TechnologiesSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleAccordion = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <>
//       <div className="lg:px-18 lg:py-20 px-10 py-10 grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
//         {/* Left Section */}
//         <div>
//           <h1 className="text-5xl font-medium pl-2">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when.
//           </h1>
//           <img
//             src={technology}
//             alt="Working Girl"
//             className="w-3/4 mx-auto mt-10"
//           />
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col gap-5 lg:pt-70 ">
//           {technologies.map((tech, index) => (
//             <div key={index}>
//               <div
//                 className="flex items-center gap-4 cursor-pointer px-5"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <div className="lg:w-[45px] lg:h-[43px] w-[38px] h-[37px] rounded-full bg-gray-700 flex items-center justify-center text-white lg:text-3xl">
//                   {activeIndex === index ? "-" : "+"}
//                 </div>
//                 <h2 className="lg:text-xl text-[14px] font-semibold">
//                   {tech.title}
//                 </h2>
//               </div>

//               {activeIndex === index && (
//                 <div className="mt-4 grid grid-cols-2 gap-3 px-10 lg:text-2xl">
//                   {tech.items.map((item, idx) => (
//                     <div
//                       key={idx}
//                       className="text-gray-500 list-disc list-inside"
//                     >
//                       • {item}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="pt-5">
//         <Divider />
//       </div>
//     </>
//   );
// };

// export default TechnologiesSection;



import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import technology from "../assets/Technology-Img.png";
import Divider from "../Components/Divider";

const technologies = [
  {
    title: "Backend Technologies & Framework",
    items: [
      "Php",
      "Postgresql",
      "Redis",
      "WordPress",
      "Magento",
      "Mysql",
      "Mongodb",
      "Symfony",
      "Open cart",
    ],
  },
  {
    title: "Frontend Technologies",
    items: [
      "Foundation",
      "Bootstrap",
      "Sass",
      "jQuery",
      "Backbone JS",
      "Angular",
    ],
  },
  {
    title: "DevOps Automations & Build Systems",
    items: [
      "Vagrant",
      "Chef",
      "Docker",
      "Grunt",
      "Gulp",
      "Brunch",
      "Ant",
      "Phing",
    ],
  },
  {
    title: "Process Control Systems & Message Queueing",
    items: ["Supervisord", "Monit", "RabbitMQ", "Resque"],
  },
  {
    title: "Dependency Management & Optimizing Assets",
    items: [
      "Composer",
      "NPM",
      "Bower",
      "TinyPNG",
      "Imagemin",
      "Javascript minify",
      "PNG and SVG sprite generator",
      "Custom fonts",
    ],
  },
  {
    title: "Testing & Quality Control",
    items: [
      "PhpUnit, Behat and Selenium with normal and headless browsers like phantomJS",
    ],
  },
];

const TechnologiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="lg:px-18 lg:py-20 px-10 py-10 grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Start from the left and invisible
          whileInView={{ opacity: 1, x: 0 }} // Fade in and slide into position
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl font-medium pl-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when.
          </h1>
          <img
            src={technology}
            alt="Working Girl"
            className="w-3/4 mx-auto mt-10"
          />
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Start from the right and invisible
          whileInView={{ opacity: 1, x: 0 }} // Fade in and slide into position
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-5 lg:pt-70 "
        >
          {technologies.map((tech, index) => (
            <div key={index}>
              <div
                className="flex items-center gap-4 cursor-pointer px-5"
                onClick={() => toggleAccordion(index)}
              >
                <div className="lg:w-[45px] lg:h-[43px] w-[38px] h-[37px] rounded-full bg-gray-700 flex items-center justify-center text-white lg:text-3xl">
                  {activeIndex === index ? "-" : "+"}
                </div>
                <h2 className="lg:text-xl text-[14px] font-semibold">
                  {tech.title}
                </h2>
              </div>

              {/* Animated Accordion Content */}
              <motion.div
                className="mt-4 grid grid-cols-2 gap-3 px-10 lg:text-2xl"
                initial={{ height: 0, opacity: 0 }} // Start collapsed and invisible
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }} // Expand and fade in when active
                transition={{ duration: 0.3 }}
              >
                {activeIndex === index &&
                  tech.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-gray-500 list-disc list-inside"
                    >
                      • {item}
                    </div>
                  ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="pt-5">
        <Divider />
      </div>
    </>
  );
};

export default TechnologiesSection;
