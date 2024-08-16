
import TwoDimension from "./TwoDimension";
import ThreeDimension from "./ThreeDimension";
import React, { useState } from 'react'

export default function UnitPlan() {
    let [activebtn, setActiveBtn] = useState(0)

    const isActiveBtn = (indexNo)=>{
        setActiveBtn(indexNo)
    }

    let btnData = ["2D View" , "3D view", ]


  return (
    <>
      <div className="lg:w-[464px] md:w-[250px] w-[240px] mx-auto grid grid-cols-2 lg:my-10 my-4 overflow-hidden border border-[#BD9943] rounded-[10px] ">
            {
                btnData.map((item, index)=>(
                    <button key={index} className={`  py-2 lg:text-[23px] md:text-[18px] text-[14px] rounded-[10px] ${(activebtn == index) ? "bg-[#BD9943] text-white" : "text-[#BD9943] bg-white" }  `}  onClick={()=>isActiveBtn(index)}> {item} </button>
                )
            )}
        </div>
        <div >
            {
                (!activebtn)  ? <TwoDimension /> : <ThreeDimension />
            }
        </div>
    </>
  )
}
