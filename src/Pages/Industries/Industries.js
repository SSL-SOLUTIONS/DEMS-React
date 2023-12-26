import React,{useEffect} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Form/Form";
import { Link } from "react-router-dom";
import Card from "../../Components/Services/Card/Card";
import "./Industries.css";
import FuncCard from "../../Components/FuncCard/FuncCard";
import SalesTeam from "../../Components/SalesTeam/SalesTeam";
const Industries = (props) => {
  useEffect(() => {
    document.title =
      "DEMS- Luxury Communitites Industry, SEO, Local SEO, PPC Services, Socia Media Marketing, Website Development and Web designing Services with #1 Ranked & Awarded Company";
  }, []);
  const {
    Name,
    Desc,
    funcTitle,
    funcSlogan,
    funcDesc,
    card1Title,
    card1Heading,
    card1Desc,
    card1BtnText,
    card1Img,
    card2Title,
    card2Heading,
    card2Desc,
    card2BtnText,
    card2Img,
    Service
  } = props;
  const ServiceDefault = "LUXURY COMMUNITIES"
  return (
    <>
      <Navbar />
      <div className="industries-wrapper">
        <div className="top-cont">
          <div className="left-links">
            <h5>{Service || ServiceDefault} Services</h5>
            <div className="luxury-links">
              <Link to="/luxury-communities/seo-services">SEO Services</Link>
              <Link to="/luxury-communities/local-seo">Local SEO</Link>
              <Link to="/luxury-communities/ppc-services">PPC Services</Link>
              <Link to="/luxury-communities/social-media">
                Social Media Marketing
              </Link>
              <Link to="/luxury-communities/web-development">
                WEB Development
              </Link>
              <Link to="/luxury-communities/web-design">WEB Designing</Link>
            </div>
          </div>
          <div className="middle-content">
            <p>{Name} FOR</p>
            <h1>{Service || ServiceDefault}</h1>
            <h5>{Desc}</h5>
          </div>
          <div className="right-form">
            <Form />
          </div>
        </div>{" "}
        <br />
        <FuncCard Slogan={funcSlogan} Title={funcTitle} Desc={funcDesc} />
        <Card
          title={card1Title}
          heading={card1Heading}
          description={card1Desc}
          btnText={card1BtnText}
          img={card1Img}
        />
        <Card
          title={card2Title}
          heading={card2Heading}
          description={card2Desc}
          btnText={card2BtnText}
          img={card2Img}
        />
      </div>
      <SalesTeam />
      <Footer />
    </>
  );
};

export default Industries;
