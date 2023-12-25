import React from "react";
import "./Hero.css";
import TrustedClient from "../TrustedClients/TrustedClient";
const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-left">
          <div className="hero-left-txt">
            <h1>
              We are best in <br />
              <span>SEO.</span>
            </h1>
            <p>
              Ask DMA to create a comprehensive and aggressive digital marketing
              plan taking your business to new heights.
            </p>
          </div>
          <div className="hero-left-input">
            <input type="text" name="" id="" />
            <button>FREE WEB ANALYSIS</button>
          </div>
        </div>
        <div className="hero-right">
          <img src="/logos/hero.jpg" alt="hero-img" />
        </div>
      </div>
      <TrustedClient/>
    </>
  );
};

export default Hero;
