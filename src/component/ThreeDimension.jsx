import { useState } from "react";
import img1 from "../images/Rectangle 603.png";
// import vector from "../images/Vector.png";
import { MdSingleBed } from "react-icons/md";


export default function ThreeDimension() {

    const [activeBtn, setActiveBtn] = useState(0)

  let btnData = [
    "Living room",
    "Outdoor Living",
    "Kitchen ",
    "Dining",
    "Master Bedroom",
    "Guest room ",
    "Kids Bedroom",
  ];

  

  return (
    <>
      <div className="md:flex  gap-8 px-4">
        <div className="md:w-[50%]">
          <img src={img1} alt="" />
        </div>
        <div className="text-left">
          <h1 className="text-[#A17D27] lg:text-[60px] md:text-[30px] ">Living Room</h1>
          <div className="lg:pt-5">
            <h3 className="lg:text-[22px] text-[18px] text-[#5E5D59] ">
              Largest main door in the segment
            </h3>
            <p className="text-[#A17D27] lg:text-[14px] text-[12px]  ">8” Feet height</p>
          </div>
          <div className="lg:py-5">
            <h3 className="lg:text-[22px] text-[18px] text-[#5E5D59] ">
              Maximum floor to ceiling height across the flat
            </h3>
            <p className="text-[#A17D27] lg:text-[14px] text-[12px]  ">
              10’5” (6 inches more than usual)
            </p>
          </div>
          <div className="lg:pt-5">
            <h3 className="lg:text-[22px] text-[18px] md:text-[18px] text-[#5E5D59] ">Designer tiles</h3>
            <p className="text-[#A17D27] lg:text-[14px] text-[12px]  ">
              800 x 800 mm Double Charged Vitrified, Designer tiles with Spacer
              Joint
            </p>
          </div>
        </div>
      </div>
      <div className="relative my-5 px-3">
        <h1 className="text-[#A17D27] lg:text-[60px] text-[40px] after:absolute after:w-[480px] after:h-[1px] after:top-[80px] lg:after:left-[0]  after:left-[15px] after:bg-[#050505] ">
          Browse From here
        </h1>
        <div className="pt-9 flex overflow-x-auto py-3 gap-4">
          {btnData.map((item, index) => (
            <div className={` cursor-pointer border m-auto border-[#A17D27]  rounded-full flex md:justify-between items-center px-2 py-1 lg:gap-2 ${(activeBtn == index) ? "bg-[#A17D27] text-white" : "bg-white text-[#A17D27]"} `} onClick={()=> setActiveBtn(index)}>
              <MdSingleBed className="size-[28px] " />
              <p className="lg:text-[17px] md:text-[12px] font-[600] text-nowrap"> {item} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
