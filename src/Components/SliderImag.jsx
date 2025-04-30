import React from "react";
import sliderImage from "../assets/slide.jpg"; // Replace with your image path

const InfiniteScrollBanner = () => {
  return (
    <div className="overflow-hidden w-full overflow-x-hidden">
      <div
        className="flex w-max animate-scroll-x"
        style={{
          animation: "scroll-x 20s linear infinite",
        }}
      >
        {/* Repeat the image to allow seamless scroll */}
        {[...Array(3)].map((_, i) => (
          <img
            key={i}
            src={sliderImage}
            alt={`slider-${i}`}
            className="h-[400px] w-auto "
          />
        ))}
      </div>

      {/* Add keyframes manually with a <style> tag */}
      <style className="">{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default InfiniteScrollBanner;
