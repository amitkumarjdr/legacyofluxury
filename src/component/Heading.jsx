

import React from 'react'

export default function Heading({ heading, para }) {
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
            <h1 className='text-[35px] md:text-[50px] lg:text-[60px] text-center uppercase text-[#BD9944] font-[700]'>
                {heading}
            </h1>
            <p className="text-center text-[12px] md:text-[14px] lg:text-[22px] text-[#5A5454] font-[600] px-4 lg:px-[150px]">
                {para}
            </p>
        </div>

    )
}



