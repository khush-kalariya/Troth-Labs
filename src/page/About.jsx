import about from "../assets/About-img-1.jpg"
import about2 from "../assets/about-img-sec.jpg"
import Details from "../Components/Details";
import Divider from "../Components/divider";

import customerservice from "../assets/customer-service.png";
import value from "../assets/value-img.png";
import vission from "../assets/vission-img.png";
import mission from "../assets/mission-img.png";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";


const data = [
  {
    imgSrc: mission,
    title: "Our Mission",
    Description:
      "We are here with a mission to help business leaders to fulfil their business objectives, utilizing the true means of cutting-edge technologies. We are committed to exceeding our clients' expectations with innovative tech solutions designed and developed by our dedicated team.",
  },

  {
    imgSrc: vission,
    title: "Our Vision",
    Description:
      "Our vision is to revolutionize industries through innovative technology, fostering global empowerment and connectivity while nurturing lasting client relationships built on trust and excellence.",
  },

  {
    imgSrc: value,
    title: "Our Value",
    Description:
      "Our values drive everything we do. Innovation fuels our solutions, integrity guides our actions, collaboration enhances our outcomes, and excellence defines our standards. Together, these values form the foundation of our commitment to delivering exceptional results for our clients and fostering a culture of continuous growth and success.",
  },
];

function About() {
  return (
    <>
      <div className="bg-[#FFE9DC] w-full h-full lg:flex pb-10">
        {/* Left Section */}
        <motion.div
          className="lg:w-[50%] w-full lg:pl-[40px] pl-2 lg:flex md:px-10 sm:px-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="lg:mr-2 lg:pt-20 lg:pl-5 xl:ml-22">
            <h1 className="lg:text-[38px] md:text-[30px] text-[32px] pt-15 font-bold lg:font-semibold tracking-wide">
              We Are Increasing Business Success With Technology
            </h1>

            <p className="mt-5 text-lg text-[#58585A] leading-7">
              Leveraging best-in-class people, processes, and technologies,
              Troth Labs provides high-quality, high-value software development
              and business process outsourcing services to independent software
              vendors (ISVs) and enterprises.
            </p>
          </div>
        </motion.div>

        {/* Right Section with Flipping Images */}
        <div className="w-[50%] flex gap-8 md:gap-20 lg:gap-10 xl:gap-15 max-lg:w-full lg:px-10 max-sm:flex-row  max-lg:mr-15 mr-5 md:mb-25 md:px-10 px-5 pb-25 xl:mr-30">
          <motion.div
            className="flex flex-col gap-[20px] lg:mt-30 md:mt-15 mt-10"
            initial={{ rotateY: 90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src={about} alt="About" />
          </motion.div>

          <motion.div
            className="xl:translate-y-110 lg:translate-y-80 md:translate-y-90 translate-y-45"
            initial={{ rotateY: -90, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img src={about2} alt="About 2" />
          </motion.div>
        </div>
      </div>
      <Details />
      <Divider />
      <div className="flex justify-center">
        <div className="container lg:px-30 lg:py-25 px-5 py-5 text-[17px] text-gray-500">
          <p className="pb-4">
            Leveraging best-in-class people, processes, and technologies, Troth
            Labs provides high-quality, high-value software development and
            business process outsourcing services to independent software
            vendors (ISVs) and enterprises.
          </p>
          <p className="pb-4">
            Troth Labs is a young entrepreneurial venture established in 2009
            through Troth Labs.
          </p>
          <p className="pb-4">
            Troth Labs focuses on innovative internet and mobile based products.
            These products leverage internet and mobile platforms to bring
            products and services to the users in an effective and enjoyable
            manner.
          </p>
          <p className="pb-4">
            Troth Labs also provides consulting, and application development
            services in information technology space and mobile. Continuous
            innovation backed by detailed and flawless execution forms the
            corner stone of Troth Labs's business philosophy.
          </p>
          <p className="pb-4">
            The heart, brain and muscles behind Troth Labs is a group of young,
            dynamic and passionate professionals trained in technology and
            business management. These brave hearts have decided to tread the
            exciting path of entrepreneurship in preference to lucrative service
            careers.
          </p>
          <p className="pb-4">
            Troth Labs delivers excellence in terms of dedicated and
            business-centric web development solutions. We are specialized in
            terms of customized web development services that meet Web 2.0
            standards and accommodate scopes for futuristic support. Our team of
            expert PHP developers, Symfony developers, Asp.net, Android
            Developers and iPhone developers make it possible to achieve web
            development solutions that are both innovative and highly
            functional.
          </p>
          <p className="pb-4">
            Troth Labs is dedicated to developing effective outsourcing
            partnerships with clients in order to accelerate time to market,
            reduce operational cost, and empower them to devote more time to
            their core business.
          </p>
          <p className="pb-4">
            Since our founding, Troth Labs has built a successful business by
            focusing on a simple yet compelling mission: supporting our clients'
            success. We do so through careful, strategic investments in
            technology, process, and—most significantly—people. Indeed, Troth
            Labs's people are our greatest strength. They're our clients'
            “secret weapon” for high-quality, custom software development and
            business process outsourcing support.
          </p>
        </div>
      </div>
      <Divider />
      <div className="px-0 py-32">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold">Our Skills</h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:px-34 px-8">
          {/* Progress Bar 1 */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-lg font-medium">Symfony Framework</label>
              <p>91%</p>
            </div>
            <div className="w-full bg-gray-300 h-5 rounded-full overflow-hidden">
              <motion.div
                className="bg-[#F36F21] h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "91%" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          {/* Progress Bar 2 */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-lg font-medium">System Architecture</label>
              <p>90%</p>
            </div>
            <div className="w-full bg-gray-300 h-5 rounded-full overflow-hidden">
              <motion.div
                className="bg-[#F36F21] h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "90%" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          {/* Progress Bar 3 */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-lg font-medium">Web Design</label>
              <p>88%</p>
            </div>
            <div className="w-full bg-gray-300 h-5 rounded-full overflow-hidden">
              <motion.div
                className="bg-[#F36F21] h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "88%" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>

          {/* Progress Bar 4 */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-lg font-medium">Web Development</label>
              <p>91%</p>
            </div>
            <div className="w-full bg-gray-300 h-5 rounded-full overflow-hidden">
              <motion.div
                className="bg-[#F36F21] h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "91%" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      
      <div className="lg:px-36 px-3 pb-10 flex">
        <div className="pt-25 pb-20">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="w-full border flex flex-col items-center pt-25 px-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center flex-col mb-5">
                  <img className="w-28" src={item.imgSrc} alt={item.title} />
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
        </div>
      </div>
      <Divider />
      <Footer />
    </>
  );
}

export default About;
