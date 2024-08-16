

import { FaLongArrowAltRight } from "react-icons/fa";
import FloorPlan from '../component/FloorPlan'
import Aminities from '../component/Aminities'
import Gallery from '../component/Gallery'
import PriceDetails from '../component/PriceDetails'
import img1 from "../images/Rectangle 566 (1).png"
import img2 from "../images/Rectangle 566 (2).png"
import img3 from "../images/Rectangle 566 (3).png"
import img4 from "../images/Rectangle 566 (4).png"
import img5 from "../images/Rectangle 540.png"
import kotak from "../images/Group 1466.png"
import icici from "../images/image 7.png"
import sbi from "../images/SBI-Logo 1.png"
import bob from "../images/image 8 (1).png"
import Heading from "../component/Heading";
import TestimonialSlider from "../component/TestimonialCardSlider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Home() {

  let bankImg = [kotak, icici, sbi, bob]

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='lg:container px-0 mx-auto '>
      <Aminities />
      <FloorPlan />
      <Gallery />
      <div className="" >
        <Heading heading=" AMINITIES" para=" Within the premises of the Sushma Township are reputed Schools." />
        <div className='grid sm:grid-cols-2 grid-cols-1  gap-4 my-5'>
          <PriceDetails img={img1} duration={1500} aos="fade-right" />
          <PriceDetails img={img2} duration={1600} aos="fade-left" />
          <PriceDetails img={img3} duration={1500} aos="fade-right" />
          <PriceDetails img={img4} duration={1600} aos="fade-left" />
        </div>
        <div className='flex my-[50px]  '>
          <div className='w-[40%] h-[100px]'>
            <img className='w-[100%] h-[100%]' src={img5} alt="" />
          </div>
          <div className='w-[60%] flex justify-evenly items-center bg-[#84641A]'>
            <p className='font-[600] sm:text-[16px] text-[12px] text-white '>
              Are you interested in  this Property?
            </p>
            <button className=' px-3 py-1 rounded-[20px] sm:text-[16px] text-[10px] bg-white gap-3 flex justify-center items-center'>
              connect with  us <FaLongArrowAltRight />
            </button>
          </div>
        </div>
      </div>
      <div >
        <Heading heading='HOME LOAN FACILITY' para="Within the premises of the Sushma Township are reputed Schools." />
        <div className="flex space-y-2  lg:justify-between justify-around flex-wrap gap-4 my-9 mx-auto">
          {
            bankImg.map((bank, index) => (
              <div className="md:w-[220px] sm:w-[35%] w-[25%] mx-2 h-[60px] md:h-[80px] border rounded-[10px] overflow-hidden px-3 shadow-[0_0_2px_1px_rgba(0,0,0,0.5)]" data-aos="fade-up-right">
                <img className="w-[100%] h-[100%] object-contain" src={bank} alt="bank Image" />
              </div>
            ))
          }
        </div>
        <div className="md:flex justify-center m items-center my-[50px] px-0">
          <div className="md:w-[50%] h-[440px] mx-auto">
            <iframe className="w-full h-[100%] " src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14307.338843723806!2d73.0287094!3d26.29945785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716969331125!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <section class="bg-[#FFF9F1] h-[440px] md:w-[50%] w-[100%] mx-auto ">
            <div class="py-8 lg:py-16 lg:px-[100px] px-[30px] mx-auto max-w-screen-md ">
              <h2 class="mb-4 lg:text-4xl text-[25px] tracking-tight font-extrabold  text-gray-900 dark:text-white">
                Get in Touch
              </h2>
              <p class="mb-8 lg:mb-4 text-[11px] lg:text-[13px] font-light ">
                You have any question? feel free to contact us.
              </p>
              <form action="#" class="space-y-8">
                <div className="">
                  <input type="text" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light bg-[#FFF1D0]" placeholder="Your Name" required />
                </div>
                <div className="">
                  <input type="email" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light bg-[#FFF1D0]" placeholder="Email" required />
                </div>
                <div className="">
                  <input type="text" className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light bg-[#FFF1D0]" placeholder="Mobile Number" required />
                </div>
                <button type="submit" class="py-2 bg-[#BD9943] px-9  font-medium text-center text-white rounded-[7px] focus:ring-4 focus:outline-none focus:ring-primary-300 ">Enquire Now </button>
              </form>
            </div>
          </section>
        </div>
      </div>
      <div className=" pt-5 mb-[50px]">
        <Heading heading="testimonial" para="Within the premises of the Sushma Township are reputed Schools." />
        <TestimonialSlider />
      </div>
    </div>
  )
}
