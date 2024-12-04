import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";
import { motion } from "motion/react"


class Svg extends Component {
  render() {
    return (
   <>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 31.6"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill vc-shape-fill"
            d="M1920,0.2v30.1c-10.4,0-22.9,0-39.6,0c-65.7,0-65.7-12.5-131.3-12.5c-65.7,0-65.7,6.8-131.3,6.8c-65.7,0-65.7-1.3-131.3-1.3
            s-65.7-5.6-131.3-5.6s-65.7,12.8-131.3,12.8s-65.7,1.1-131.3,1.1s-65.7-14.1-131.3-14.1s-65.7,4.8-131.3,4.8
            c-65.7,0-65.7,6.3-131.3,6.3s-65.7-5.4-131.3-5.4s-65.7,7.4-131.3,7.4s-65.7-8.6-131.3-8.6c-65.7,0-65.7,5.6-131.3,5.6
            s-65.7-7-131.3-7c-18,0-31,0.3-41.8,0.7V0.3C10.8-0.3,1920,0.2,1920,0.2z"
          />
        </svg>
        <FaStar />
        
        <FaStar />
        <FaHeart />
        <FaWheatAwn />
        <WiStars />
      </>
    );
  }
}
export default Svg;
