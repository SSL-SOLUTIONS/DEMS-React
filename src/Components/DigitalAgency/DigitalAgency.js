import React from "react";
import "./DigitalAgency.css";
const DigitalAgency = () => {
  return (
    <>
      <div className="digagency-wrapper" id="awards">
        <h6
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          DIGITAL MARKETING AGENCY
        </h6>
        <h4
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          We have achieved lot of Awards & Recognitions Check some of our
          Achievements
        </h4>
        <div className="in-cards">
          <div className="card" data-aos="fade-right" data-aos-duration="3000">
            <div className="in-image">
              <img src="/agency/first.jpg" alt="" />
            </div>
            <h6 className="f-h6">LEADER</h6>
            <h2>Crowd Reviews</h2>
            <h6>CLIENT FEEDBACK</h6>
            <h6 className="t-h6">UNITED STATES</h6>
          </div>
          <div className="card" data-aos="fade-up" data-aos-duration="3000">
            <div className="in-image">
              <img
                src="https://images.ctfassets.net/bete4dit0n31/15QtRoYB49UorpR1dZ9lsd/f7c7f7e7f5fbf2116e1ab888e854675f/image_44.svg"
                alt=""
              />
            </div>
            <h6 className="f-h6">NOMINATED</h6>
            <h2>Digital BIMA Award</h2>
            <h6>DIGITAL DESIGN</h6>
            <h6 className="t-h6">United States</h6>
          </div>
          <div className="card" data-aos="fade-left" data-aos-duration="3000">
            <div className="in-image">
              <img
                src="https://images.ctfassets.net/bete4dit0n31/2INB5h0eW5Feuy0L8R57dJ/918bbe8dd50981dc158e0e9f8aff6fa9/image_8.svg"
                alt=""
              />
            </div>
            <h6 className="f-h6">NOMINATED</h6>
            <h2>Graphic Design Award</h2>
            <h6>DIGITAL DESIGN</h6>
            <h6 className="t-h6">United States</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalAgency;
