import React from "react";
import { motion } from "framer-motion";
import Divider from "../Components/divider";
import Footer from "../Components/Footer";

const services = [
  {
    icon: "✔️",
    title: "High Quality Study",
    description:
      "Troth labs has the team of developers having a minimum qualification of Bachelors degree in computer science, who are poured with basic knowledge of internet technologies & programming which are upgrading time to time.",
  },
  {
    icon: "👥",
    title: "Open Community",
    description:
      "Troth labs developers do also works for communities of Symfony, Limesurvey projects on which we do work, posts issues, do take part in the conversations of the features or issues, do provide solutions, and many of the code has been approved so far.",
  },
  {
    icon: "🗄️",
    title: "Storage Engines",
    description:
      "Troth labs is flexible in terms of using storage engines, and has been involved in providing suggestions to use specific storage engines depending upon the project requirements. MySql, MongoDB, Postgres, Redis, Oracle, MsSql are already been used.",
  },
  {
    icon: "⏰",
    title: "Work On Time",
    description:
      "We do care of the deadlines, and business of our clients, by delivering the tested and quality application on time considering their future plans of making the project a big hit. Thanks to our clients with their clear requirements.",
  },
  {
    icon: "☁️",
    title: "Cloud Storage",
    description:
      "Troth labs has extensive knowledge of using cloud computing, cloud storage and has been using Amazon web services, Digital Ocean cloud computing servers including load balancers for stability and flexibility of the application.",
  },
  {
    icon: "🌐",
    title: "Highload Websites",
    description:
      "Developed the high reliable applications using technologies to balance the server load and provide high performance to each and every concurrent users of our applications. It has been proven from the least number of complaints from clients.",
  },
];

function QualityPolicy() {
  return (
    <>
      <div>
        {/* Header Section with animation */}
        <motion.div
          className="bg-[#FFE9DC] w-full h-75"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full h-full flex flex-col gap-4 justify-center items-center">
            <h1 className="text-5xl font-semibold">Quality Policy</h1>
            <p className="text-xl text-gray-500">Troth Labs Quality Policy</p>
          </div>
        </motion.div>

        {/* Main Section */}
        <motion.div
          className="max-w-7xl mx-auto px-6 py-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center py-10">
            Why Choose Us?
          </h2>

          <motion.div
            className="space-y-6 text-gray-600 text-[17px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Deliver best products, software solutions and services, on time
              with quality, and as per customer expectations.
            </p>
            <p>
              Troth labs has attained vast experience in providing software
              services and solutions to its clients across the globe in the last
              4 years which reflects our versatility in servicing customer
              requirements.
            </p>
            <p>
              We strive to serve our clients better on every project and are
              always climbing one step on the ladder of customer service by
              delivering more than their expectation. Customer Delight is our
              true achievement; and this we achieve through our high-quality
              services.
            </p>
            <p>
              We aim at delivering superior quality projects by imbibing these
              parameters in house through:
            </p>
          </motion.div>

          {/* Two-column bullet points with slight delay and fade-in */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 text-left text-gray-600 text-[17px] pt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ul className="space-y-3 list-disc list-inside">
              <li>Ease and comfort of communication.</li>
              <li>Flexibility in managing your development team.</li>
              <li>Improvement of process.</li>
              <li>High team spirit.</li>
              <li>
                Creative ideas generation regarding improvement of your product.
              </li>
              <li>Smart working culture rather than overworking.</li>
            </ul>

            <ul className="space-y-3 list-disc list-inside">
              <li>
                HR initiatives in improving employees' overall quality of life.
              </li>
              <li>Cost control measures for profit sustainability.</li>
              <li>
                Complying with work, health, safety, and professional norms.
              </li>
              <li>We work with a vision of long-term business relationship.</li>
              <li>Full support even after completing the project.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <Divider />

      <div className="">
        <h1 className="text-center pt-25 pb-10 text-5xl">Other Services</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:px-35 px-4 pb-25">
        {services.map((data, index) => (
          <motion.div
            key={index}
            className="shadow-md p-6 rounded-lg text-center space-y-4 border border-gray-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl">{data.icon}</div>
            <h3 className="text-2xl font-semibold">{data.title}</h3>
            <p className="text-gray-500">{data.description}</p>
          </motion.div>
        ))}
      </div>
      <Divider />
      <Footer />
    </>
  );
}

export default QualityPolicy;
