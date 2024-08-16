

import { FaUnlockAlt } from "react-icons/fa";

export default function PriceDetails({ img, aos, duration }) {
    return (
        <>
            <div className="basis-1/2 flex justify-between items-center border rounded-[10px]  shadow-[0_0_2px_0px_rgba(0,0,0,0.5)] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  mx-5" data-aos={aos} data-aos-duration={duration}>
                <div className="basis-[30%] ">
                    <div className="md:w-full lg:h-[150px]  size-[100px] ">
                        <img className="w-full h-full object-contain " src={img} alt="" />
                    </div>
                </div>
                <div className="space-y-1 basis-[70%] ">
                    <div className="bg-[#E0E0E0] font-[600] lg:text-[14px] text-[8px] mt-[2px] w-[100%] ">
                        Pay only 20%  & Zero Pre EMI till Possession
                    </div>
                    <h1 className="lg:text-[20px] text-[13px] font-[500] ">
                        3 BHK + STAFF + LOUNGE
                    </h1>
                    <h1 className="lg:text-[22px] text-[14px] text-[#BD9943] font-[500]  ">
                        2815 SQFT.
                    </h1>
                    <button className="flex lg:text-[16px] text-[12px] justify-center items-center text-white bg-[#BD9943] border-0 rounded-[10px] md:px-4 px-2 md:py-2 py-1 gap-3 ">
                        <FaUnlockAlt />
                        Unlock Price
                    </button>

                </div>
            </div>
        </>

    )
}
