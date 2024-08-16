import img01 from "../images/image 5.png";

import React, { useState } from "react";
import BHKSize from "./BHKSize";

export default function TwoDimension() {
  const [btnBg, setBtnbg] = useState("bg-[#BD9943] text-white");
  const [secontdbtnBg, setSecondBtnbg] = useState("text-[#BD9943] bg-white");

  return (
    <>
      <div className="md:flex justify-center px-4 mx-auto">
        <div className="lg:h-[580px] md:h-[400px] sm:h-[300px] md:w-[50%] w-full">
          <img className="w-full h-full lg:object-fill md:object-contain" src={img01} alt="" />
        </div>
        <div className="md:space-y-4 space-y-1 md:pt-4 pt-1 text-center lg:text-start md:w-[50%] w-ful">
          <div className="lg:w-[400px] w-[230px] sm:text-[14px] lg:mx-0 mx-auto grid grid-cols-2 rounded-[10px] border border-[#BD9943] overflow-hidden">
            <button className={`border-0 py-2 ${btnBg}`}>
              1980 sq.ft.
            </button>
            <button className={`border-0 py-2 ${secontdbtnBg}`}>
              1695 sq.ft.
            </button>
          </div>
          <p className="text-[#7F7F79] lg:text-[20px] text-[13px] tracking-[10px]">
            EXCLUSIVE 3BHK
          </p>
          <h1 className="lg:text-[34px] text-[20px] text-[#BD9943]">
            1980 sq.ft. (East | Type-1)
          </h1>
          <p className="lg:text-[16px] text-[14px] text-[#807F79]">
            Where comfort meets happiness, everyday!
          </p>
          <div className="py-2">
            <button className={`border rounded-[10px] py-1 px-4 ${btnBg} translate-x-[8px]`}>
              2D View
            </button>
            <button className={`border rounded-[10px] py-1 px-4 ${secontdbtnBg}`}>
              3D View
            </button>
          </div>
          <div className="grid grid-cols-2 gap-y-5  ">
            <div className=" pe-6 border-r border-r-[#BD9943]">
              <p className="text-[#BD9943] px-2 pb-1 lg:text-[17px] text-[14px]  border-b border-b-[#BD9943] inline">
                Rera Carpet Area
              </p>
              <h1 className="lg:text-[25px] text-[18px]">1242 sq.ft.</h1>
            </div>
            <div className="ps-9">
              <p className="text-[#BD9943] px-2 pb-1 lg:text-[17px] text-[14px]  border-b border-b-[#BD9943] inline">
                Balcony Area
              </p>
              <h1 className="lg:text-[25px] text-[18px]">305 sq.ft.</h1>
            </div>
            <div className="pe-6 border-r border-r-[#BD9943]">
              <p className="text-[#BD9943] px-2 pb-1 lg:text-[17px] text-[14px]   border-b border-b-[#BD9943] inline">
                External Wall Area
              </p>
              <h1 className="lg:text-[25px] text-[18px]">1242 sq.ft.</h1>
            </div>
            <div className="lg:ps-9">
              <p className="text-[#BD9943] px-2 pb-1 lg:text-[17px] text-[14px] border-b border-b-[#BD9943] inline">
                Common Area
              </p>
              <h1 className="lg:text-[25px] text-[18px]">305 sq.ft.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-6 px-4">
        <h1 className="text-[#6D6868] lg:text-[60px] md:text-[40px] text-[30px] after:absolute sm:after:w-[37%] md:after:w-[47%] lg:after:w-[57%] after:h-[2px] lg:after:top-[80px] after:top-[60px] after:right-0 after:bg-[#A6A6A6]">
          Browse From here
        </h1>
        <h2 className="text-[#444342] lg:text-[34px] text-[25px] py-5">
          3 BHK 1980 sq.ft
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          <BHKSize aos="fade-up-right" />
          <BHKSize aos="fade-up-left" />
          <BHKSize aos="fade-up-right" />
          <BHKSize aos="fade-up-left" />
        </div>
        <h2 className="text-[#444342] lg:text-[34px] text-[25px] py-5">
          3 BHK 2220 sq.ft
        </h2>
        <div className="lg:w-[50%]">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <BHKSize aos="fade-up-right" />
          <BHKSize aos="fade-up-left" />
        </div>
        </div>
      </div>
    </>

  );
}
