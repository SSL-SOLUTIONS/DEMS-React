import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import SalesTeam from "../../Components/SalesTeam/SalesTeam";
import Industries from "../../Components/Industries/Industries";
import TrustedClient from "../../Components/TrustedClients/TrustedClient";
import "./Services.css";
import Card from "../../Components/Services/Card/Card";
import LionCont from "../../Components/LionCont/LionCont";
import Form from "../../Components/Form/Form";
import { useNavigate } from "react-router-dom";
const Services = (props) => {
  const navigate = useNavigate();
  const {
    Slogan,
    title,
    titleDesc,
    secondContSlogan,
    SecondContTitle,
    SecondContDesc,
    card1Heading,
    card1Title,
    card1Description,
    card1BtnText,
    card2Heading,
    card2Title,
    card2Description,
    card2BtnText,
    card3Heading,
    card3Title,
    card3Description,
    card3BtnText,
    lionTitle,
    lionSlogan,
    lionDesc,
  } = props;
  return (
    <>
      <Navbar />
      <div className="services-page-wrapper">
        <div className="servicesPage-left">
          <div className="servicesPage-left-txt">
            <h1>
              <span>{Slogan}</span> <br />
              {title}
            </h1>
            <p>{titleDesc}</p>
          </div>
        </div>
        <div className="servicesPage-right">
          <Form />
        </div>
      </div>{" "}
      <br />
      <TrustedClient />
      <div className="servicePage-second-cont">
        <div className="txt">
          <h1>{secondContSlogan}</h1> <br />
          <h5>{SecondContTitle}</h5> <br />
          <h5>{SecondContDesc}</h5>
          <button className="btn" onClick={() => navigate("/contact-us")}>
            REQUEST A QUOTE
          </button>
        </div>
      </div>
      <Card
        heading={card1Heading}
        title={card1Title}
        description={card1Description}
        btnText={card1BtnText}
        img="/servicePage/card-1.jpg"
      />
      <Card
        heading={card2Heading}
        title={card2Title}
        description={card2Description}
        btnText={card2BtnText}
        img="/servicePage/seo-card2.jpg"
      />
      <Card
        heading={card3Heading}
        title={card3Title}
        description={card3Description}
        btnText={card3BtnText}
        img="/servicePage/seo-card3.jpg"
      />
      <LionCont Title={lionTitle} Desc={lionDesc} Slogan={lionSlogan} />
      <SalesTeam />
      <Footer />
    </>
  );
};

export default Services;
