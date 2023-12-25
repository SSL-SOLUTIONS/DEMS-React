import React from 'react'
import "./SalesTeam.css"
const SalesTeam = () => {
  return (
    <>
      <div className="sales-wrapper">
        <h6>OUR SALES TEAM</h6>
        <h2>We Are Available For You Every Time</h2>
        <div className="bottom-cont">
          <div className="left-text">
            <h1>
              Book a meeting <span> <br />to get started</span>
            </h1>
            <h6>
              Speak to an expert to find out how Digital Consumer Intelligence
              will change the way you work.
            </h6>
            <button>BOOK A MEETING</button>
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