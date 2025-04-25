import React from "react";
import troth from "../assets/troth-logo-1.png";
import { FaLocationDot, FaMobileScreenButton, FaEnvelope, FaClock } from "react-icons/fa6";
import Divider from "./Divider";

// Footer Data
const footerInfo = [
  {
    icon: <FaLocationDot />,
    lines: [
      "Wings-Business Bay, 1706-7,150Feet Ring Road, Mavdi Circle, Nr. ITC Fortune Hotel, Rajkot, ",
    ],
  },
  {
    icon: <FaMobileScreenButton />,
    lines: ["+91 90162 13380", "+91 99981 43131"],
  },
  {
    icon: <FaEnvelope />,
    lines: ["info@trothlabs.com"],
  },
  {
    icon: <FaClock />,
    lines: ["Weekdays from", "9:30 am to 7:30 pm"],
  },
];

function Footer() {
  return (
    <div className="bg-[#EBEBEB] w-full">
      {/* Logo */}
      <div className="flex justify-center py-25">
        <img src={troth} alt="Troth Labs Logo" className="" />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-0 lg:px-20 px-5">
        {footerInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-5 max-w-xs pb-5">
            <div>
              <div className="w-14 h-14 bg-[#F36F21] text-white text-2xl flex justify-center items-center rounded">
                {item.icon}
              </div>
            </div>

            <div className="flex flex-col text-black font-medium text-[14px]">
              {item.lines.map((line, idx) => (
                <p key={idx} className="">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <Divider />
      <div className="text-center py-10 text-sm">
        <p>
          Copyright © 2024{" "}
          <a href="#" className="text-blue-500 underline">
            Troth Labs
          </a>
          . Coded by Troth Labs
        </p>
      </div>
    </div>
  );
}

export default Footer;
