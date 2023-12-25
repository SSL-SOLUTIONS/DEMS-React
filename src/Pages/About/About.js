import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./About.css";
import SalesTeam from "../../Components/SalesTeam/SalesTeam";
import TrustedClient from "../../Components/TrustedClients/TrustedClient";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-wrapper">
        <div className="top-first">
          <h6>ABOUT US</h6>
          <h1>OUR COMMITMENT</h1>
          <h4>
            We’re constantly searching for the brightest people from all over
            the world. People who are as trusted as they are talented and as
            passionate about their work as they are about their team. People who
            want to make marketing magic happen for legendary clients.
          </h4>
        </div>
        <div className="compare">
          <div className="left">
            <div className="top">
              <div className="left-image">
                <img src="/about/compare1.png" alt="" />
              </div>
              <div className="comp-text">
                <h3>SUPERFICIAL CULTURE</h3>
                <h6>COOKIE-CUTTER SOLUTIONS</h6>
              </div>
            </div>
            <div className="bottom bottom-l">
              <h2>Underwhelming</h2>
              <h2>Low-quality output</h2>
              <h2>One-size-fits-all approach</h2>
              <h2>Commission breath</h2>
            </div>
          </div>
          <div className="middle">
            <h2>VS.</h2>
          </div>
          <div className="right">
            <div className="top">
              <div className="right-image">
                <img src="/about/compare2.png" alt="" />
              </div>
              <div className="comp-text">
                <h3>UNCOMMON CULTURE</h3>
                <h6>SUSTAINABLE PERFORMANCE</h6>
              </div>
            </div>
            <div className="bottom  bottom-r">
              <h2>Granular attention to detail</h2>
              <h2>Aligned with your unique needs</h2>
              <h2>Industry specialization</h2>
              <h2>Invested in your growth</h2>
            </div>
          </div>
        </div>
      </div>
      <TrustedClient/>
      <div className="container mt-5">
        <MDBRow>
          <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
            <div className="image-container position-relative">
              <img
                src="https://images.ctfassets.net/bete4dit0n31/3ywvnxZYr1TWbIUWPrRaya/0ab68242ae9d71b437f7b83e6512d86a/Rectangle_8093.png"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
              <div className="overlay-text">
                <h2>
                  Over 15 years of delivering marketing results to clients.
                </h2>
                <p>Meet Us</p>
              </div>
            </div>

            <div className="image-container position-relative">
              <img
                src="https://images.ctfassets.net/bete4dit0n31/16YLdxTZsr5nJZnkJglgY2/9dce532fc4bda843e9af9bbafa49908c/Group_132700__2_.png"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
              <div className="overlay-text">
                <h2>We'd love to meet you.</h2>
                <p>
                  Superior work for best results. Got a question about
                  marketing? Our team is always ready to help.
                </p>
              </div>
            </div>
          </MDBCol>

          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <div className="image-container position-relative">
              <img
                src="https://images.ctfassets.net/bete4dit0n31/EWAndEsW0ahiw5qL3ZPQL/faa4f626555702f11ca37b21cb5cf88b/Rectangle_8113__2_.png"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
              <div className="overlay-text">
                <h2>Happy clients and even happier people.</h2>
                <p>Meet Our Team</p>
              </div>
            </div>

            <div className="image-container position-relative">
              <img
                src="https://images.ctfassets.net/bete4dit0n31/1q3hyPbwjX7c92x1H4rcmr/e1635140a045ab8ff404c616ef9b0dfb/Group_132519.png"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
              <div className="overlay-text">
                <h2>
                  Join our team and work with some of the biggest brands on
                  massive campaigns.
                </h2>
                <p>Client</p>
              </div>
            </div>
          </MDBCol>

          <MDBCol lg={4} className="mb-4 mb-lg-0">
            <div className="image-container position-relative">
              <img
                src="https://images.ctfassets.net/bete4dit0n31/7pDTp1SbiPev5AI4lumOnq/73243097d802682c561a041a3b535b6a/Group_132700__1_.png"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
              <div className="overlay-text">
                <h2>Get effective SEO strategies tailored to your needs.</h2>
                <p>View SEO Services</p>
              </div>
            </div>

            <div className="image-container position-relative">
              <img
                src="https://images.ctfassets.net/bete4dit0n31/6ICehoiaWgII9oyueJMt15/1cfcaa035bb7f503174001708a8a230b/Group_132700__3_.png"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
              <div className="overlay-text">
                <h2>Grow your following online.</h2>
                <p>Leverage your social media channels to their fullest.</p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
      <SalesTeam/>
      <Footer />
    </>
  );
};

export default About;
