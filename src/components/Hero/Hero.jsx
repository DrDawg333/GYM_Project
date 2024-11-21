import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";


const Hero = () => {
  return (
    <div className="hero">
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header/>
    {/* the best ad  */}
            <div className="the-best-ad">
              <div></div>
              <span>The best fitness club in da hood</span>
            </div>
    {/* hero heading  */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>Shape</span>
                <span> Your</span>
              </div>
              <div>
                <span>Ideal Body</span>
              </div>
              <div>
                <span>
                In here we make your dream come true
                </span>
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
          <button className='btn'>Join Now</button>

          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>120 bpm</span>
          </div>
      {/* hero images  */}
          <img src={hero_image} alt="" className='hero-image'/>
          <img src={hero_image_back} alt="" className='hero-image-back'/>
      {/* claories  */}
          <div className='calories'>
            <img src={Calories} alt=""/>
            <div>
              <span>Calories Burned</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero