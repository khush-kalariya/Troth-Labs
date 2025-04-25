import React from "react";
import services from "../assets/services-hero-img1.png";
import Divider from "../Components/Divider";
import Details from "../Components/Details";
import { FaArrowRightLong } from "react-icons/fa6";
import nodejs from "../assets/node-js-svgrepo-com (1).svg";
import react from "../assets/react-svgrepo-com.svg";
import seo from "../assets/seo-svgrepo-com.svg";
import apple from "../assets/apple-173-svgrepo-com.svg";
import html from "../assets/html-5-svgrepo-com.svg";
import android from "../assets/android-color-svgrepo-com.svg";
import php from "../assets/php-svgrepo-com.svg";
import symfony from "../assets/symfony-svgrepo-com.svg";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const data = [
  {
    imgSrc: nodejs,
    title: "Node JS",
    Description:
      "Node JS is a runtime environment that allows developers to run JavaScript code outside the browser, primarily on the server side. It uses an event-driven, non-blocking I/O model, making it lightweight and efficient for building scalable and real-time web applications. Node.js is known for its vast ecosystem of packages and modules available through npm, enabling rapid development and deployment of applications.",
  },

  {
    imgSrc: react,
    title: "React JS",
    Description:
      "React JS is a JavaScript library for building dynamic user interfaces. It uses a component-based approach and a virtual DOM for efficient rendering. React simplifies UI development with its declarative syntax and is widely used for web applications.",
  },

  {
    imgSrc: seo,
    title: "SEO",
    Description:
      "Enhance your online visibility and drive organic traffic with our tailored SEO strategies. From keyword optimization to content creation, we ensure your website ranks higher and attracts more visitors, leading to increased engagement and conversions.",
  },

  {
    imgSrc: apple,
    title: "Iphone Software Development",
    Description:
      "Unlock the full potential of iOS with our expert iPhone software development services. From sleek user interfaces to robust backend functionality, we craft tailored solutions that elevate your app to the top of the App Store charts. Let us turn your ideas into intuitive, high-performance applications that captivate users and drive business success.",
  },
  {
    imgSrc: html,
    title: "HTML5 & CSS3",
    Description:
      "Elevate your web presence with cutting-edge HTML5 and CSS3 development. Our expert team crafts visually stunning and seamlessly responsive websites that deliver exceptional user experiences across all devices. With the latest in web technologies, we ensure your site stands out, loads fast, and engages visitors, driving conversions and boosting your online success.",
  },
  {
    imgSrc: android,
    title: "Android Development",
    Description:
      "Transform your vision into reality with our Android development expertise. Our seasoned team crafts dynamic, user-friendly apps that leverage the full potential of the Android platform. From concept to deployment, we ensure seamless performance, intuitive interfaces, and compatibility across devices, empowering you to reach a wider audience and achieve your business goals in the competitive mobile market.",
  },
  {
    imgSrc: php,
    title: "PHP Web Development",
    Description:
      "Unlock the power of PHP for your web projects with our expert development services. Whether you need a dynamic website, custom web application, or robust e-commerce platform, our skilled team leverages PHP's versatility and efficiency to deliver scalable solutions tailored to your specific requirements. From backend development to seamless integration, we ensure high performance, security, and a superior user experience for your online presence.",
  },
  {
    imgSrc: symfony,
    title: "Symfony Application Development",
    Description:
      "Elevate your web applications with Symfony development expertise. Our team harnesses the power of Symfony's robust framework to create scalable, high-performance applications that meet your unique business needs. From intricate backend systems to intuitive user interfaces, we ensure seamless integration, security, and optimal performance, empowering you to deliver exceptional digital experiences to your users",
  },
];

function Services() {
  return (
    <>
      <div className="bg-[#ffe7d9] min-h-screen py-8 px-3 lg:px-31 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-5xl text-3xl font-semibold text-black leading-tight mb-6">
            Our IT Services, To Make Remarkable Business Footprints
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Empower your business with our comprehensive IT services tailored to
            meet your unique needs. From network security and infrastructure
            management to cloud solutions and IT consulting, we provide reliable
            support that keeps your systems running smoothly and your data
            secure. With our expertise, streamline your operations, enhance
            productivity, and stay ahead in today's rapidly evolving digital
            landscape.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={services}
            alt="IT Services Illustration"
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
      <Details />
      <Divider />
      <div className="lg:px-36 px-3 pb-16 mt-25">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-full bg-white border border-gray-300 flex flex-col items-center p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center flex-col mb-6 pt-5">
                <img className="w-24 mb-4" src={item.imgSrc} alt={item.title} />
                <h2 className="text-center text-2xl font-bold text-gray-800">
                  {item.title}
                </h2>
              </div>
              <p className="text-center text-[16.5px] text-gray-600 mb-6 leading-relaxed">
                {item.Description}
              </p>
              <button className="relative overflow-hidden px-5 py-3 mt-auto bg-[#58585A] text-white font-semibold flex items-center gap-2 rounded cursor-pointer group">
                <span className="relative z-10 flex items-center gap-2">
                  Read More
                  <span className="text-xl font-semibold">
                    <FaArrowRightLong />
                  </span>
                </span>
                <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 ease-in-out group-hover:w-full z-0" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <Divider />
      <Footer />
    </>
  );
}

export default Services;
