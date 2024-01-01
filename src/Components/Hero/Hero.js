import React, { useEffect, useState } from "react";
import "./Hero.css";
import TrustedClient from "../TrustedClients/TrustedClient";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);

  const handleScroll = () => {
    setShowInput(window.scrollY > window.innerHeight / 2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`hero-wrapper${showInput ? " visible" : ""}`}>
        <div className="hero-left">
          <div className="hero-left-txt">
            <h1>
              We are best in <br />
              <span>SEO.</span>
            </h1>
            <p>
              Ask DEMS to create a comprehensive and aggressive digital marketing
              plan taking your business to new heights.
            </p>
          </div>
          <div className="hero-left-input">
            <ScrollLink to="contact-us" smooth={true} duration={500}>
              <input type="text" name="" id="" placeholder="Your email" />
              <button onClick={() => navigate("/contact-us")}>
                FREE WEB ANALYSIS
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className="hero-right">
          <img src="/logos/hero.jpg" alt="hero-img" />
        </div>
      </div>
      <TrustedClient />
    </>
  );
};

export default Hero;
