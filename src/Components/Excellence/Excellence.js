import React, { useState, useEffect, useRef } from "react";
import "./Excellence.css";

const useVisible = (ref) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= 0;
      setIsVisible(isInView);
    }
  };

  useEffect(() => {
    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isVisible;
};

const Excellence = () => {
  const wrapperRef = useRef(null);
  const isVisible = useVisible(wrapperRef);

  useEffect(() => {
    if (isVisible) {
      const numbers = document.querySelectorAll(".exc-number > h1");
      const targets = [750, 135, 45, 20];
      let intervalIds = [];

      numbers.forEach((number, index) => {
        let counter = 0;
        const target = targets[index];
        const intervalId = setInterval(() => {
          counter += Math.ceil((target - counter) / 10);
          number.innerText = "+" + counter;

          if (counter >= target) {
            clearInterval(intervalId);
          }
        }, 50);

        intervalIds.push(intervalId);
      });

      // Clear intervals when leaving the view
      return () => {
        intervalIds.forEach(clearInterval);
      };
    }
  }, [isVisible]);

  return (
    <div
      ref={wrapperRef}
      className={`excellence-wrapper ${isVisible ? "visible" : ""}`}
    >
      <h6>EXCELLENCE NUMBERS</h6>
      <h4>
        Time flies when you’re building relationships. Here’s a quick glance at
        what we’ve accomplished over the years.
      </h4>
      <div className="excellence-numbers">
        <div className="exc-number">
          <h1>0</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <div className="exc-number">
          <h1>0</h1>
          <p>TEAM MEMBERS</p>
        </div>
        <div className="exc-number">
          <h1>0</h1>
          <p>GLOBAL AWARDS</p>
        </div>
        <div className="exc-number">
          <h1>0</h1>
          <p>YEARS EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default Excellence;
