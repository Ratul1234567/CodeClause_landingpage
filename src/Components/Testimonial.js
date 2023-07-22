import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Healthy Customers Talk About Us </h1>
        <p className="primary-text">
           Our  food is made up of freshest ingredients and the result is much better with a fresh look and of course great taste guarantee.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Do yourself a favour and visit this lovely restaurant in  Kolkata. The service is unmatched .The stafff truly cares about your experience.The food is absolutely amazing-everything we tasted melted in our mouths.Highly recommended
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Rahul Prasad</h2>
      </div>
    </div>
  );
};

export default Testimonial;
