

import React from 'react'

export default function Testimonial({ img, name }) {
    return (
        <div class="testimonial-card h-full  lg:flex justify-center items-center mx-4 py-5  my-[50px] shadow-[0_0_2px_0px_rgba(0,0,0,0.5)] rounded-[12px] ">
            <div class=" w-full mx-auto xl:w-1/3 lg:w-1/4 md:w-1/3 lg:h-[200px] h-[150px] flex justify-center items-center">
                <img src={img} alt="" class="my-auto mx-auto  h-[100%] bg-white" />
            </div>
            <div class="w-full xl:w-2/3 lg:w-3/4 md:w-2/3 p-4 mx-auto">
                <h5 class="testimonial-title border-b border-b-[#777171] text-[#656262] text-xl font-semibold">Payal Jain</h5>
                <p class="testimonial-content mt-2 md:text-[16px] text-[12px] text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                </p>
            </div>
        </div>

    )
}
