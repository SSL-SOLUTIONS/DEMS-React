import React from 'react'
import "./TrustedClient.css"
const TrustedClient = () => {
  return (
    <div className="hero-clientLists" >
      <h5 className='heading' data-aos="fade-up-right" data-aos-duration="1000">TRUSTED BY THE BEST CLIENTS LIST:</h5>
      <div className="img-fluid" data-aos="flip-left" data-aos-duration="2000">
        <img src="/logos/SSLTRAINING.png" alt="SSLTRAINING" />
      </div>
      <div className="img-fluid" data-aos="flip-left" data-aos-duration="2000">
        <img src="/logos/SSLSPACES.png" alt="SSLSPACES" />
      </div>
      <div className="img-fluid" data-aos="flip-left" data-aos-duration="2000">
        <img src="/logos/TRAVEL.png" alt="TRAVELS" />
      </div>
      <div className="img-fluid" data-aos="flip-left" data-aos-duration="2000">
        <img src="/logos/DEMSSTORE.png" alt="DEMSSTORE" />
      </div>
      <div className="img-fluid" data-aos="flip-left" data-aos-duration="2000">
        <img src="/logos/CHEAPHUT.png" alt="CHEAPHUT" />
      </div>
    </div>
  );
}

export default TrustedClient