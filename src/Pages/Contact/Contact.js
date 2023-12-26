import React, {useEffect} from "react";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Form from "../../Components/Form/Form";
import SalesTeam from "../../Components/SalesTeam/SalesTeam";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    document.title =
      "DEMS - We care about our Customers";
  }, []);
  return (
    <>
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-top">
          <div className="contact-left">
            <p>CONTACT US</p>
            <h1>Connect with us.</h1>
            <h4>
              Our digital marketing team is always ready to help. Give us a
              call, send us an email, or fill out the form below.
            </h4>{" "}
            <br />
            <br />
            <div className="left-subCont">
              <div className="sub-inner">
                <div className="inner-title">
                  <FaLocationDot className="contact-icon" />
                  <h2>OFFICE ADDRESS</h2>
                </div>
                <p>
                  313, 3rd Floor, Landmark Plaza, <br />
                  Jail Road, Lahore
                </p>
              </div>
              <div className="sub-inner">
                <div className="inner-title">
                  <FaPhoneVolume className="contact-icon" />
                  <h2>PHONE NUMBER</h2>
                </div>
                <p>+92 (312) 4700-804</p>
              </div>
            </div>{" "}
            <br />
            <br />
            <div className="sub-inner inner-email">
              <div className="inner-title inner-email">
                <MdEmail className="contact-icon" />

                <h2>EMAIL US</h2>
              </div>
              <p>
                <strong>Support Request: </strong>contact@demsteam.com
              </p>
            </div>
          </div>
          <div className="right-form">
            <Form />
          </div>
        </div>
      </div>
      <SalesTeam />
      <Footer />
    </>
  );
};

export default Contact;
