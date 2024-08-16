import React, { useState } from "react";
import towerImg from "../images/image 9.png"

export default function TowerPlan() {
    let [activeBtn, setActiveBtn] = useState(1)

    const thisActiveBtn = (index) => {
        setActiveBtn(index)
      }
  return (
    <>
      <div className="container mx-auto my-[50px] lg:px-0 px-2">
        <p className="lg:text-[20px] font-[600] text-[#444342] my-5 text-center ">
          Click on the buttons below to view the tower plans in detail!
        </p>
        <div className="flex justify-center gap-7">
          {["A", "B"].map((item, index) => (
            <button
              className={`border border-[#474536] rounded-[9px] lg:px-16 px-4 py-1 font-[600] text-[14px] lg:text-[28px] ${
                activeBtn === index
                  ? "bg-[#474536] text-white"
                  : "bg-white text-[#474536]"
              }`}
              onClick={() => thisActiveBtn(index)}
            >
              Tower {item}
            </button>
          ))}
        </div>
        <div className="bg-[#EEEEEE] rounded-[40px] px-5 lg:px-0 p-5 my-4  ">
          <img className="w-[100%] h-[100%] " src={towerImg} alt="" />
        </div>
      </div>
    </>
  );
}
