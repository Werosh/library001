import React from "react";
import BgImg from "../assets/bg-imgs/background.png";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-100]">
      <img
        src={BgImg}
        alt="Background Image"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Background;
