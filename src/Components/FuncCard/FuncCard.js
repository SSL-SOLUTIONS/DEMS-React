import React from "react";
import "./FuncCard.css";
import { useNavigate } from "react-router-dom";

const FuncCard = (props) => {
  const navigate = useNavigate();
  const { Slogan, Title, Desc } = props;
  return (
    <div className="functionalCard-cont" data-aos="flip-down">
      <div className="txt">
        <h1  data-aos="zoom-in-right">{Slogan}</h1> <br />
        <h5  data-aos="zoom-in-right">{Title}</h5> <br />
        <h5  data-aos="zoom-in-right">{Desc}</h5>
        <button className="btn" onClick={() => navigate("/contact-us")}>
          REQUEST A QUOTE
        </button>
      </div>
    </div>
  );
};

export default FuncCard;
