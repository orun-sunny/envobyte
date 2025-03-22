import React from "react";

const CircleText = ({ number, text }) => {
  return (
    <div className="font-raleway w-[196px] h-[196px] rounded-full bg-gradient-to-t from-[#001C6C] to-[#FF693B] flex flex-col pt-6 pl-6 gap-3 text-white ${className}">
      <span className="text-[45px] font-extrabold leading-[51px] tracking-[0%] ">
        {number}
      </span>
      <span className="text-[22px] font-extrabold leading-[28px] ">{text}</span>
    </div>
  );
};

export default CircleText;
