import Image from "next/image";
import React from "react";
import Link from "next/link";

const StyledItem = ({ title, backgroundImg, description, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full  shadow-gray-400  group hover:bg-white bg-opacity-25 backdrop-blur-lg backdrop-filter rounded-lg shadow-lg">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-black tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-black text-center">{description}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-gray-200 text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default StyledItem;
