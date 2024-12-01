import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const transition = { tpye:'string', duration: 2, ease: "easeInOut" };
  const mobile = window.innerWidth<768 ? true: false;

  return (
    <div className="hero">
      <div className="blur blur-h"></div>
      <div className="left-h">
        <Header />
        {/* the best ad  */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left:mobile? "178px": "238px" }}
            animate={{ left: "8px" }}
            transition={transition}
          ></motion.div>
          <span>The best fitness club in da hood</span>
        </div>
        {/* hero heading  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>In here we make your dream come true</span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>+100</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+1000</span>
            <span>members</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <Link to={'/signup'} className="btn">Join Now</Link>

        <motion.div 
         initial={{right:"-1rem"}}
         whileInView={{right:"4rem"}}
         transition={{ duration: 1, ease: "easeInOut" }}
         className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>120 bpm</span>
        </motion.div>
        {/* hero images  */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{right: "11rem"}}
          whileInView={{right: "32rem"}}
          transition={transition}
          src={hero_image_back} alt="" className="hero-image-back" />
        {/* claories  */}
        <motion.div 
         initial={{right: "50rem"}}
         whileInView={{right: "38rem"}}
         transition={transition}
         className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
