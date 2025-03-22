import Image from "next/image";
import React from "react";

const Member = ({ photo, name, title }) => {
  return (
    <div>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={355}
        height={433}
        loading="lazy"
        className="w-full object-cover"
      />
      <div
        className={
          "font-inter bg-[#0A2C8C] flex flex-col gap-2.5 px-5 py-5.5 text-white"
        }
      >
        <p className="text-[20px] font-semibold leading-[28px] ">{name}</p>
        <p className="text-[16px] font-semibold leading-[22px] ">{title}</p>
      </div>
    </div>
  );
};

export default Member;
