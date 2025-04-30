// import React from "react";
// import customerservice from "../assets/customer-service.png";
// import target from "../assets/target.png";

// const data = [
//   {
//     imgSrc: target,
//     title: "Application Development",
//     Description:
//       "Troth Labs has a proven track record of providing custom application development and maintenance services to its clients in various industries.",
//   },

//   {
//     imgSrc: target,
//     title: "HTML5 CSS3",
//     Description:
//       "HTML5 identity system provides the visual vocabulary to clearly classify and communicate our collective efforts. A framework designed to support innovation and foster the full potential the web has to offer.",
//   },

//   {
//     imgSrc: target,
//     title: "Mobile Applications",
//     Description:
//       "We offer solutions for Android and iPhone based platforms at cost-effective packs that guarantee you to stay in touch of your business transactions while on the go and away from office.",
//   },

//   {
//     imgSrc: target,
//     title: "Premium Support",
//     Description:
//       "Available support 24X7X365 on solutions. Troth Labs has the ability to handle large enterprise systems and provide cost effective on time support.",
//   },
// ];

// function SubServices() {
//   return (
//     <div className="px-30 flex">
//       <div>
//         <div className="pt-20 pb-5">
//           <h1 className="text-5xl font-semibold">Services</h1>
//         </div>

//         <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-1.5">
//           {data.map((data, index) => (
//             <div className="w-full border flex flex-col items-center justify-center px-10">
//               <div className="pt-20">
//                 <img className="w-30" src={customerservice} alt="" />
//               </div>
//               <div className="flex flex-col gap-5">
//                 <h1 className="text-center text-2xl font-semibold">
//                   {data.title}
//                 </h1>
//                 <p className="text-center text-[17.5px] text-gray-400">
//                   {data.Description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SubServices;

import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation
import customerservice from "../assets/customer-service.png";
import laptop from "../assets/laptop.png";
import html from "../assets/html.png";
import smartphone from "../assets/smartphone.png";
import Divider from "../Components/Divider";

const data = [
  {
    imgSrc: laptop,
    title: "Application Development",
    Description:
      "Troth Labs has a proven track record of providing custom application development and maintenance services to its clients in various industries.",
  },

  {
    imgSrc: html,
    title: "HTML5 CSS3",
    Description:
      "HTML5 identity system provides the visual vocabulary to clearly classify and communicate our collective efforts. A framework designed to support innovation and foster the full potential the web has to offer.",
  },

  {
    imgSrc: smartphone,
    title: "Mobile Applications",
    Description:
      "We offer solutions for Android and iPhone based platforms at cost-effective packs that guarantee you to stay in touch of your business transactions while on the go and away from office.",
  },

  {
    imgSrc: customerservice,
    title: "Premium Support",
    Description:
      "Available support 24X7X365 on solutions. Troth Labs has the ability to handle large enterprise systems and provide cost effective on time support.",
  },
];

function SubServices() {
  return (
    <>
      <div className="lg:px-36 px-6 pb-10 flex">
        <div>
          <div className="pt-30 pb-5">
            <h1 className="text-5xl font-semibold">Services</h1>
          </div>

          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="w-full border border-gray-400 flex flex-col items-center pt-25 px-5"
                initial={{ opacity: 0, y: 30 }} // Initial state: invisible and slightly below
                whileInView={{ opacity: 1, y: 0 }} // Final state: fully visible and in position
                transition={{ duration: 0.5, delay: index * 0.2 }} // Animation delay for each card
                viewport={{ once: true }} // Only animate when the item enters the viewport
              >
                <div className="flex items-center justify-center flex-col mb-5">
                  <img className="w-28" src={item.imgSrc} alt={item.title} />
                  <h1 className="text-center text-2xl font-semibold pt-10">
                    {item.title}
                  </h1>
                </div>
                <p className="text-center text-[17.5px] px-1 text-gray-500 mb-10 ">
                  {item.Description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-18">
        <Divider />
      </div>
    </>
  );
}

export default SubServices;
