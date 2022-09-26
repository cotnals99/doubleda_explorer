import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}

        <div className="left">
          <div class="content">
            <h1 class="slide-left">The Future</h1>
            <p class="slide-left">PLACE TO ENJOY YOUR FUTURE BLOCKCHAIN LIFE!</p>
            <p class="slide-left">
              DoubleDa is your portal to the blockchain world, enabling you to
              create user-friendly dApps more easily.
            </p>
            <h2 class="slide-left">Connected with us to Explorer Further</h2>

            <div className="input-container">
              <input type="email" placeholder="Enter your email" />
              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            {/* <img src={Crypto} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
