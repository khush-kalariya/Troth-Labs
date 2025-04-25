// import React from "react";
// import contact from "../assets/contact-top-banner.png";
// import { FaClock } from "react-icons/fa6";
// import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import Footer from "../Components/Footer";

// function Contact() {
//   return (
//     <>
//       <div>
//         <div className="bg-[#ffe7d9] h-full flex lg:px-20 md:px-10 px-5  lg:pt-25 pt-18 flex-col md:flex-row items-center justify-between">
//           <div className="md:w-1/2">
//             <div className="">
//               <h1 className="xl:text-5xl lg:text-3xl md:text-3xl text-3xl font-semibold text-black leading-tight mb-6">
//                 Discussion Makes Sensible Outcomes
//               </h1>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 We help you spin your dream projects into result-driven
//                 real-world solutions. Let’s brainstorm your Creative Ideas...
//                 And convert those ideas into reality.
//               </p>
//             </div>
//           </div>
//           <div className="lg:w-[50%] md:w-1/2 mt-10 md:mt-0 flex items-end justify-center">
//             <img
//               src={contact}
//               alt="IT Services Illustration"
//               className="max-w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="xl:px-30 lg:px-10 px-8 pt-30">
//         <div className="bg-white min-h-[70%] py-10 flex flex-col md:flex-row gap-12">
//           {/* Left Info Box */}
//           <div className="border border-dashed border-gray-400 w-full xl:p-8 lg:px-5 md:px-2 p-5 md:w-2/5">
//             <p className="text-gray-600 text-lg font-medium mb-4">Let's Talk</p>
//             <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-2xl font-semibold mb-6">
//               Speak With Expert Engineers.
//             </h2>

//             <div className="space-y-10 mt-13">
//               {/* Address */}
//               <div className="flex items-start gap-4">
//                 <div className="bg-orange-500 lg:p-4 p-3 rounded shadow-md">
//                   <FaMapMarkerAlt className="text-white text-xl" />
//                 </div>
//                 <p className="text-gray-800 text-sm md:text-base">
//                   Wings Business Bay, 1706-7, 150 Feet Ring Road, Mavdi Circle,
//                   Nr. ITC Fortune Hotel, Rajkot, Gujarat 360004
//                 </p>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start gap-4">
//                 <div className="bg-orange-500 lg:p-4 p-3 rounded shadow-md">
//                   <FaPhoneAlt className="text-white text-xl" />
//                 </div>
//                 <div className="text-sm md:text-base">
//                   <p>+91 901 621 3380</p>
//                   <p>+91 999 814 3131</p>
//                 </div>
//               </div>

//               {/* Hours */}
//               <div className="flex items-start gap-4">
//                 <div className="bg-orange-500 lg:p-4 p-3 rounded shadow-md">
//                   <FaClock className="text-white text-xl" />
//                 </div>
//                 <p className="text-sm md:text-base">
//                   Weekdays from <br />
//                   9:30 am to 7:30 pm
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Form Box */}
//           <div className="w-full md:w-3/">
//             <p className="text-gray-600 text-lg font-medium mb-2">
//               Get in Touch
//             </p>
//             <h2 className="text-3xl md:text-4xl font-semibold mb-6">
//               Fill The Form Below
//             </h2>

//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                 <input
//                   type="text"
//                   placeholder="First Name *"
//                   className="border-b border-black outline-none py-5"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name *"
//                   className="border-b border-black outline-none py-5"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email *"
//                   className="border-b border-black outline-none py-5"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone *"
//                   className="border-b border-black outline-none py-5"
//                 />
//               </div>

//               <textarea
//                 placeholder="Message Here.."
//                 rows="4"
//                 className="w-full border-b border-black outline-none py-5"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="bg-gray-700 text-white px-8 py-3 rounded shadow-md hover:bg-gray-800"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div style={{ width: "100%", height: "650px" }}>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.3723859499735!2d70.78599647460388!3d22.258151043244376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb051b864ceb%3A0x24767fbaabd6987e!2sWings%20Business%20Bay!5e0!3m2!1sen!2sin!4v1681622245634!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="lg:mt-25"
//         ></iframe>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );

// }

// export default Contact;



import React from "react";
import contact from "../assets/contact-top-banner.png";
import { FaClock } from "react-icons/fa6";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Contact() {
  return (
    <>
      <div>
        <motion.div
          className="bg-[#ffe7d9] h-full flex lg:px-20 md:px-10 px-5 pt-18 flex-col md:flex-row items-center justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div className="md:w-1/2 space-y-4" variants={fadeInUp}>
            <h1 className="xl:text-5xl lg:text-3xl md:text-3xl text-3xl font-semibold text-black leading-tight">
              Discussion Makes Sensible Outcomes
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We help you spin your dream projects into result-driven real-world
              solutions. Let’s brainstorm your Creative Ideas... And convert
              those ideas into reality.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-[50%] md:w-1/2 mt-10 md:mt-0 flex items-end justify-center"
            variants={fadeInUp}
          >
            <img
              src={contact}
              alt="IT Services"
              className="max-w-full h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="xl:px-30 lg:px-10 px-8 pt-30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-white min-h-[70%] py-10 flex flex-col md:flex-row gap-12">
            {/* Left Info Box */}
            <motion.div
              className="border border-dashed border-gray-400 w-full xl:p-8 lg:px-5 md:px-2 p-5 md:w-2/5"
              variants={fadeInUp}
            >
              <p className="text-gray-600 text-lg font-medium mb-4">
                Let's Talk
              </p>
              <h2 className="xl:text-3xl lg:text-2xl md:text-xl text-2xl font-semibold mb-6">
                Speak With Expert Engineers.
              </h2>

              <div className="space-y-10 mt-13">
                {/* Address */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-orange-500 lg:p-4 p-3 rounded shadow-md">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <p className="text-gray-800 text-sm md:text-base">
                    Wings Business Bay, 1706-7, 150 Feet Ring Road, Mavdi
                    Circle, Nr. ITC Fortune Hotel, Rajkot, Gujarat 360004
                  </p>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-orange-500 lg:p-4 p-3 rounded shadow-md">
                    <FaPhoneAlt className="text-white text-xl" />
                  </div>
                  <div className="text-sm md:text-base">
                    <p>+91 901 621 3380</p>
                    <p>+91 999 814 3131</p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-orange-500 lg:p-4 p-3 rounded shadow-md">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <p className="text-sm md:text-base">
                    Weekdays from <br /> 9:30 am to 7:30 pm
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Form Box */}
            <motion.div className="w-full md:w-3/5" variants={fadeInUp}>
              <p className="text-gray-600 text-lg font-medium mb-2">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Fill The Form Below
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className="border-b border-black outline-none py-5 hover:shadow-md transition duration-300"
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="border-b border-black outline-none py-5 hover:shadow-md transition duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="border-b border-black outline-none py-5 hover:shadow-md transition duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    className="border-b border-black outline-none py-5 hover:shadow-md transition duration-300"
                  />
                </div>

                <textarea
                  placeholder="Message Here.."
                  rows="4"
                  className="w-full border-b border-black outline-none py-5 hover:shadow-md transition duration-300"
                ></textarea>

                <motion.button
                  type="submit"
                  className="bg-gray-700 text-white px-8 py-3 rounded shadow-md hover:bg-gray-800 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        <div style={{ width: "100%", height: "650px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.3723859499735!2d70.78599647460388!3d22.258151043244376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb051b864ceb%3A0x24767fbaabd6987e!2sWings%20Business%20Bay!5e0!3m2!1sen!2sin!4v1681622245634!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:mt-25"
          ></iframe>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;


