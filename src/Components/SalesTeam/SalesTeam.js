import React from 'react'
import "./SalesTeam.css"
import { useNavigate } from 'react-router-dom';
const SalesTeam = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sales-wrapper">
        <h6 data-aos="fade-down" data-aos-duration="2000">
          OUR SALES TEAM
        </h6>
        <h2 data-aos="fade-down" data-aos-duration="2000">
          We Are Available For You Every Time
        </h2>
        <div className="bottom-cont">
          <div className="left-text">
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Book a meeting{" "}
              <span>
                {" "}
                <br />
                to get started
              </span>
            </h1>
            <h6
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Speak to an expert to find out how Digital Consumer Intelligence
              will change the way you work.
            </h6>
            <button onClick={() => navigate("/contact-us")}>
              BOOK A MEETING
            </button>
          </div>
          <div className="right-img">
            <img src="/salesTeam/sales.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesTeam