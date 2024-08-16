import React, { useRef, useState } from "react";

import MasterPlan from "./MasterPlan";
import TowerPlan from "./TowerPlan";
import UnitPlan from "./UnitPlan";
import banner from "../images/Group 1472.png"
import Heading from "./Heading";

export default function FloorPlan() {
  let planArr = [" unit plan", "master plan", "tower plan "];
  let [activebtn, setActiveBtn] = useState(0);

  return (
    <>
      <div className=" my-5" >
        <Heading heading=" FLOOR plans" para=" Within the premises of the Sushma Township are reputed Schools,
          Offices, Shopping Centers, Walkways, Parks, and Recreational spaces." />

        <div className="border-b-[1.67px] flex border-b-[#615E5A] mt-4  text-nowrap ">
          {planArr.map((item, index) => (
            <div className="relative ">
              <button
                className={`capitalize lg:text-[35px] sm:text-[18px] font-[700]  ${activebtn == index
                  ? "after:absolute after:bg-[#BD9943] after:w-[70%] after:h-[8px] after:rounded-full after:bottom-[-4px] after:left-[15%]  rounded-[50%] text-[#BD9943]"
                  : "text-[#838383]"
                  } lg:px-8 px-5 py-2 `}
                onClick={() => setActiveBtn(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
          {
            (!activebtn) ? <UnitPlan /> : (activebtn == 1) ? <MasterPlan /> : <TowerPlan />

          }
        </div>
        <div className="py-2 w-auto  cursor-pointer" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500">
          <img src={banner} alt="" />
        </div>
      </div>
    </>
  );
}
