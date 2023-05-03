import React from "react";
import StyledItem from "./StyledItem";
import thermalcloths from "../../public/1.png";
import winteractivewear from "../../public/4.png";
import flothinguggs from "../../public/flothinguggs.png";
import socks from "../../public/socks.png";
import blackleggings from "../../public/bla-legging1.png";
import accessories from "../../public/3.png";
import uggs from "../../public/2.png";

const NewArival = () => {
  return (
    <div className="w-full h-[80px] py-16 mx-auto px-2 max-w-[1240px] ">
      <div className=" text-center py-12 ">
        <p className="text-xl uppercase tracking-widest text-black pb-8 ">
          SHOP BY CATEGORY
        </p>
      </div>
      <div class="h-full  bg-opacity-25 backdrop-blur-lg backdrop-filter rounded-lg ">
        <div className="m-auto md:grid grid-cols-4 gap-4 w-full ">
          <StyledItem
            title="THERMAL CLOTHES"
            description="blablaba"
            backgroundImg={thermalcloths}
            projectUrl={"https://www.instagram.com/shimsham_active/"}
          />
          <StyledItem
            title="ACTIVEWEAR"
            description="blablaba"
            backgroundImg={winteractivewear}
            projectUrl={"https://www.instagram.com/shimsham_active/"}
          />
          <StyledItem
            title="CUTE STUFF"
            description="blablaba"
            backgroundImg={accessories}
            projectUrl={"https://www.instagram.com/shimsham_active/"}
          />
          <StyledItem
            title="UGGS"
            description="blablaba"
            backgroundImg={uggs}
            projectUrl={"https://www.instagram.com/shimsham_active/"}
          />
        </div>
        <div className="m-auto md:grid grid-cols-2 gap-4"></div>
      </div>
    </div>
  );
};

export default NewArival;
