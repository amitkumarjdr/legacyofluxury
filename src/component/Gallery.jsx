

import React, { useRef, useState } from "react";
import img1 from "../images/Rectangle 473.png"
import img2 from "../images/Rectangle 474.png"
import img3 from "../images/Rectangle 476.png"
import img4 from "../images/Rectangle 475.png"
import img5 from "../images/Rectangle 477.png"
import img6 from "../images/Rectangle 478.png"
import Heading from "./Heading";

export default function Gallery() {
    let planArr = [" Project WALK THROUGH ", "SAMPLE FLAT", "Project Gallery  "];
    let [activebtn, setActiveBtn] = useState(1);

    return (
        <>
            <Heading heading=" Gallery" para=" Within the premises of the Sushma Township are reputed Schools." />
            <div className="border-b-[1.67px] flex border-b-[#615E5A] mt-4 gap-5 ">
                {planArr.map((item, index) => (
                    <div className="relative ">
                        <button
                            className={`uppercase w-full lg:text-[35px] text-[15px] font-[700]  ${activebtn == index
                                ? "after:absolute after:bg-[#BD9943] lg:after:w-[85%] after:w-[79%] after:h-[5px] after:rounded-full after:bottom-[-4px] after:left-[8%]  rounded-[50%] text-[#BD9943]"
                                : "text-[#838383]"
                                } lg:px-8 px-1 py-2 `}
                            onClick={() => setActiveBtn(index)}>
                            {item}
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex my-8 gap-2">
                <div className=" overflow-hidden">
                    <img className="scale-100 hover:scale-105 duration-1000" src={img1} alt="" />
                </div>
                <div >
                    <div className="flex gap-2">
                        <div className="overflow-hidden">
                            <img className="scale-100 hover:scale-105 duration-1000" src={img2} alt="" />
                        </div>
                        <div className="overflow-hidden">
                            <img className="scale-100 hover:scale-105 duration-1000" src={img3} alt="" />
                        </div>
                    </div>
                    <div className="flex gap-2 pt-2 ">
                        <div className="overflow-hidden">
                            <img className="scale-100 hover:scale-105 duration-1000" src={img4} alt="" />
                        </div>
                        <div className="overflow-hidden">
                            <img className="scale-100 hover:scale-105 duration-1000" src={img5} alt="" />
                        </div>
                        <div className="overflow-hidden">
                            <img className="scale-100 hover:scale-105 duration-1000" src={img6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
