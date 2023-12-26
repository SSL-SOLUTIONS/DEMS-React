import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom';
const Card = (props) => {
  const navigate = useNavigate();
    const { heading, title, description, btnText,img } = props;
  return (
    <div className="card-wrapper">
      <div className="card-left">
        <div className="card-left-txt">
          <h1>{heading}</h1>
          <h4>{title}</h4> <br />
          <p>{description}</p>
        </div>{" "}
        <br />
        <button className="btn" onClick={() => navigate("/contact-us")}>
          {btnText}
        </button>
      </div>
      <div className="card-right">
        <img src={img} alt="card-img" />
      </div>
    </div>
  );
}

export default Card