import React from "react";
import "./Communities.css";

const Communities = (props) => {
  const {
    communityType,
    communityDescription,
    communityTitle,
    price,
    priceDescription,
    percent,
    percentDescription,
    userTitle,
    userDescription,
    image,
  } = props;

  return (
    <div className="communities-wrapper">
      <main className="main-cont">
        <div className="com-cont-left">
          <h6 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{communityType}</h6>
          <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{communityTitle}</h1>
          <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{communityDescription}</p>
          <div className="com-price">
            <div className="price-left" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
              <h5>${price}</h5>
              <p>{priceDescription}</p>
            </div>
            <div className="price-right">
              <h5 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{percent}%</h5>
              <p data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">{percentDescription}</p>
            </div>
          </div>
          <div className="user" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <h6>{userTitle}</h6>
            <p>{userDescription}</p>
          </div>
        </div>
        <div className="right">
          <img
            src={image}
            alt=""
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          />
        </div>
      </main>
    </div>
  );
};

export default Communities;
