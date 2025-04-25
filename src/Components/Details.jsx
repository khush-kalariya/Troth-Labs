// import React from "react";
// import target from "../assets/target.png";
// import Idea from "../assets/light-bulb.png";
// import cloud from "../assets/cloud.png";
// import trips from "../assets/management.png";
// import Divider from "./divider";

// const data = [
//   { imgSrc: target, count: "20", label: "Happy Client" },
//   { imgSrc: Idea, count: "40", label: "Ideas Got Wings" },
//   { imgSrc: cloud, count: "90", label: "Projects on Cloud" },
//   { imgSrc: trips, count: "35", label: "Trips with Team" },
// ];

// function Details() {
//   return (
//     <>
//       <div className="w-full py-24 flex justify-center">
//         <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-15">
//           {data.map((data, index) => (
//             <div key={index} className="w-full flex items-center gap-4">
//               <img className="w-[80px]" src={data.imgSrc} alt={data.label} />
//               <div className="flex flex-col justify-center">
//                 <h1 className="text-5xl font-black">{data.count}+</h1>
//                 <p className="text-xl text-gray-400">{data.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Divider />
//     </>
//   );
// }

// export default Details;



import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion"; // ✅ Import framer-motion methods
import target from "../assets/target.png";
import Idea from "../assets/light-bulb.png";
import cloud from "../assets/cloud.png";
import trips from "../assets/management.png";
import Divider from "./divider";

const data = [
  { imgSrc: target, count: 20, label: "Happy Client" },
  { imgSrc: Idea, count: 40, label: "Ideas Got Wings" },
  { imgSrc: cloud, count: 90, label: "Projects on Cloud" },
  { imgSrc: trips, count: 35, label: "Trips with Team" },
];

// Animated Counter Component
const AnimatedCounter = ({ targetNumber }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, targetNumber, {
      duration: 2, // Duration of the animation
      ease: "easeOut", // Easing effect for smooth animation
    });

    return controls.stop; // Stop animation when component unmounts
  }, [targetNumber, count]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplay(v)); // Update the displayed count
  }, [rounded]);

  return <motion.h1 className="text-5xl font-black">{display}+</motion.h1>;
};

function Details() {
  return (
    <>
      <div className="w-full py-24 flex justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-15">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-full flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img className="w-[80px]" src={item.imgSrc} alt={item.label} />
              <div className="flex flex-col justify-center">
                {/* Counter Animation */}
                <AnimatedCounter targetNumber={item.count} />
                <p className="text-xl text-gray-400">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Details;
