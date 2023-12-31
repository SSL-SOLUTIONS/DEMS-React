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
          <h6>{communityType}</h6>
          <h1>{communityTitle}</h1>
          <p>{communityDescription}</p>
          <div className="com-price">
            <div className="price-left">
              <h5>${price}</h5>
              <p>{priceDescription}</p>
            </div>
            <div className="price-right">
              <h5>{percent}%</h5>
              <p>{percentDescription}</p>
            </div>
          </div>
          <div className="user">
            <h6>{userTitle}</h6>
            <p>{userDescription}</p>
          </div>
        </div>
        <div className="right">
          <img src={image} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Communities;
