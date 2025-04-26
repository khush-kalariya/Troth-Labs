// import React from "react";
// import { RiFacebookFill, RiMenu2Fill } from "react-icons/ri";
// import { FaLinkedinIn, FaTwitter, FaXTwitter } from "react-icons/fa6";
// import { TiSocialGooglePlus } from "react-icons/ti";
// import Trothimage from "../assets/troth-logo-1.png";
// import { Link } from "react-router-dom";

// const socialLinks = [
//   {
//     href: "https://www.facebook.com/",
//     icon: <RiFacebookFill />,
//     bg: "black",
//     hoverText: "white",
//   },
//   {
//     href: "https://x.com/?lang=en",
//     icon: <FaXTwitter />,
//     bg: "black",
//     hoverText: "white",
//   },
//   {
//     href: "https://www.linkedin.com/",
//     icon: <FaLinkedinIn />,
//     bg: "black",
//     hoverText: "white",
//   },
//   {
//     href: "https://www.google.com/",
//     icon: <TiSocialGooglePlus />,
//     bg: "black",
//     hoverText: "white",
//   },
// ];

// const Header = ({ toggleSidebar }) => {
//   return (
//     <div className="bg-zinc-100 px-4 py-4 lg:px-20 lg:py-5 flex items-center justify-between sticky top-0">
//       <button
//         onClick={toggleSidebar}
//         className="text-2xl lg:text-4xl flex items-center justify-center cursor-pointer"
//       >
//         <RiMenu2Fill />
//         <p className="text-xs lg:text-sm font-bold">MENU</p>
//       </button>

//       <Link to="/">
//         <img
//           className="w-[130px] lg:w-[230px] lg:h-[65px] lg:ml-24"
//           src={Trothimage}
//           alt="Logo"
//         />
//       </Link>

//       <div className="hidden lg:flex gap-2.5">
//         {socialLinks.map((link, index) => (
//           <a
//             key={index}
//             href={link.href}
//             className={`w-[50px] h-[45px] border flex items-center justify-center text-xl hover:bg-${link.bg} hover:text-${link.hoverText} transition-all`}
//           >
//             {link.icon}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useEffect, useState } from "react";
import { RiFacebookFill, RiMenu2Fill } from "react-icons/ri";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import Trothimage from "../assets/troth-logo-1.png";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    icon: <RiFacebookFill />,
    bg: "black",
    hoverText: "white",
  },
  {
    href: "https://x.com/?lang=en",
    icon: <FaXTwitter />,
    bg: "black",
    hoverText: "white",
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedinIn />,
    bg: "black",
    hoverText: "white",
  },
  {
    href: "https://www.google.com/",
    icon: <TiSocialGooglePlus />,
    bg: "black",
    hoverText: "white",
  },
];

const Header = ({ toggleSidebar }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => window.removeEventListener("scroll", controlHeader);
    }
  }, [lastScrollY]);

  return (
    <div
      className={`bg-white px-4 py-4 lg:px-20 lg:py-5 flex items-center justify-between fixed w-full top-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <button
        onClick={toggleSidebar}
        className="text-2xl lg:text-4xl flex items-center justify-center cursor-pointer"
      >
        <RiMenu2Fill />
        <p className="text-xs lg:text-sm font-bold">MENU</p>
      </button>

      <Link to="/">
        <img
          className="w-[130px] lg:w-[230px] lg:h-[65px] lg:ml-24"
          src={Trothimage}
          alt="Logo"
        />
      </Link>

      <div className="hidden lg:flex gap-2.5">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`w-[50px] h-[45px] border flex items-center justify-center text-xl hover:bg-${link.bg} hover:text-${link.hoverText} transition-all`}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
