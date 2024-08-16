


import React, { Component } from "react";
import Slider from "react-slick";
import Testimonial from "./Testimonial";
import img1 from "../images/Rectangle 97.png"
import img2 from "../images/Rectangle 98.png"


 function TestimonialSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
       <div>
        <Testimonial img= {img1}  name = "Kamla" />
       </div>
       <div>
        <Testimonial img= {img2} name = "Shivani" />
       </div>
       <div>
        <Testimonial img= {img2} name = "Shivani"  />
       </div>
        
      </Slider>
    </div>
  );
}

export default TestimonialSlider;

