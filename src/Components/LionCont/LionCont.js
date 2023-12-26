import React from "react";
import "./LionCont.css"
import { useNavigate } from "react-router-dom";
const LionCont = (props) => {
    const navigate = useNavigate();
  const {Title, Desc, Slogan} = props;
  return (
    <div className="lionCont-wrapper">
      <div className="lionCont-left">
        <div className="lionCont-left-txt">
          <h1>{Title}</h1>
          <p>{Slogan}</p> <br />
          <p>{Desc}</p>
        </div>
        <button className="btn" onClick={() => navigate("/contact-us")}>
          START NOW
        </button>
      </div>
    </div>
  );
};

export default LionCont;
