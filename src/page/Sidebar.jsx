import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail, IoMdTime } from "react-icons/io";
import { MdLocationOn, MdOutlinePhoneIphone } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { TiSocialGooglePlus } from "react-icons/ti";
import { Link } from "react-router-dom";

function Sidebar({ closeSidebar }) {
  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-y-auto">
      <div className="bg-white w-full lg:w-1/2 relative p-6">
        {/* Close btn*/}
        <div className="absolute text-[#58585A]">
          <button
            onClick={closeSidebar}
            className="relative top-4 lg:left-[70px] md:left-[65px] text-3xl font-bold flex items-center cursor-pointer"
          >
            ✖ 
            <span className="ml-2 text-sm font-normal">CLOSE</span>
          </button>
        </div>

        <div className="flex flex-col justify-center gap-10 mt-[89px] text-4xl lg:text-5xl lg:px-[80px] md:px-17">
          <Link to="/" onClick={closeSidebar}>
            Home
          </Link>
          <Link to="/about" onClick={closeSidebar}>
            About
          </Link>
          <Link to="/qualitypolicy" onClick={closeSidebar}>
            Quality Policy
          </Link>
          <Link to="/services" onClick={closeSidebar}>
            Services
          </Link>
          <Link to="/career" onClick={closeSidebar}>
            Career
          </Link>
          <Link to="/contact" onClick={closeSidebar}>
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Panel: Get In Touch */}
      <div className="bg-[#E5E5E5] w-full lg:w-1/2 px-6 py-10 flex items-center">
        <div className="w-full max-w-xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6">Get In Touch</h1>

          <div className="flex gap-3 mb-4">
            <MdLocationOn className="text-4xl" />
            <p className="font-light">
              Wings Business Bay, 1706-7, 150 Feet Ring Road, Mavdi Circle, Nr.
              ITC Fortune Hotel, Rajkot, Gujarat 360004
            </p>
          </div>

          <div className="flex gap-3 mb-4">
            <MdOutlinePhoneIphone className="text-2xl" />
            <div className="font-light">
              <p>+91 901 621 3380</p>
              <p>+91 999 814 3131</p>
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <IoIosMail className="text-2xl" />
            <a href="mailto:info@trothlabs.com" className="font-light">
              info@trothlabs.com
            </a>
          </div>

          <div className="flex gap-3 mb-8">
            <IoMdTime className="text-2xl" />
            <p className="font-light">Weekdays from 10:30 am to 8:30 pm</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Connect With Us!</h2>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/"
              className="w-[45px] h-[45px] border flex items-center justify-center text-xl hover:bg-[#0F6DFA] hover:text-white transition-all"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://x.com/?lang=en"
              className="w-[45px] h-[45px] border flex items-center justify-center text-xl hover:bg-black hover:text-white transition-all"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              className="w-[45px] h-[45px] border flex items-center justify-center text-xl hover:bg-[#0A66C2] hover:text-white transition-all"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.google.com/"
              className="w-[45px] h-[45px] border flex items-center justify-center text-xl hover:bg-[#D54836] hover:text-white transition-all"
            >
              <TiSocialGooglePlus />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
