import React from "react";
import "./MarketTailored.css";
const MarketTailored = () => {
  return (
    <>
      <div className="marketTailorCont">
        <h4
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          SOCIAL MEDIA MARKETING TAILORED TO YOUR BUSINESS
        </h4>
        <div className="cards">
          <div className="tailoredCards" data-aos="flip-up">
            <div className="img">
              <img src="/MarketTailored/eye.svg" alt="" />
            </div>
            <div className="text">
              <h5>Identify Objectives</h5>
              <p>
                Get clear on what you want to accomplish and we’ll build out a
                strategy from there.
              </p>
            </div>
          </div>
          <div className="tailoredCards" data-aos="flip-up">
            <div className="img">
              <img src="/MarketTailored/mini_eye.svg" alt="" />
            </div>
            <div className="text">
              <h5>Social Media Audit</h5>
              <p>
                Establish a starting point to map the most effective route to
                achieving your social media marketing goals.
              </p>
            </div>
          </div>
          <div className="tailoredCards" data-aos="flip-up">
            <div className="img">
              <img src="/MarketTailored/Re-assessment.svg" alt="" />
            </div>
            <div className="text">
              <h5>Account Management</h5>
              <p>
                Let our experts take over social media management to provide
                consistent marketing and messaging across platforms.
              </p>
            </div>
          </div>
          <div className="tailoredCards" data-aos="flip-up">
            <div className="img">
              <img src="/MarketTailored/book.svg" alt="" />
            </div>
            <div className="text">
              <h5>Market Analysis</h5>
              <p>
                Develop a thorough understanding of the market and how you stack
                up against the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketTailored;
