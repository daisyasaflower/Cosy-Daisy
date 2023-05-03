import Image from "next/image";
import React from "react";
import redhairthermaltop from "../../public/redhairthermaltop.png";
import thermaltopcloseup from "../../public/thermaltopcloseup.png";
import newuggs from "../../public/newugghero.png";
import coverpic from "../../public/cover1.png";

const HeroSection = () => {
  return (
    <div id="heroSection" className=" w-full pt-[140px] p-1 py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-2 flex items-center content-center justify-center">
        <div
          className="w-full h-auto m-auto   flex items-center
        justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image className="rounded-xl" src={coverpic} alt="/" />
        </div>
        <div className="col-span-1">
          <p className="uppercase text-xl tracking-widest text-[#black]">
            Your winter wardrobe essentials
          </p>
          <h2 className="py-2 text-gray-600">
            <span className="text-[#5651e5]"></span>
          </h2>
          <p className="py-2 text-gray-600">
            Welcome to CozyDaisy, your one-stop destination for the finest
            thermal underwear, leggings, and Ugg boots.
          </p>
          <div class="bg-black rounded-xl w-24">
            <button class="py-2 pl-2 text-white text-center content-center items-center ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
