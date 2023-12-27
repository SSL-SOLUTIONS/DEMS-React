import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "./Footer.css";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/logos/DMA-logo.png" alt="DMA-logo" />
      </div>
      <div className="footer-wrapper">
        <div className="footer-links">
          <div className="list list-1">
            <ul>
              <h4>WHAT WE DO</h4>
              <Link to="/seo-services">
                <li>SEO</li>
              </Link>
              <Link to="/ppc-management-services">
                <li>PPC</li>
              </Link>
              <Link to="/reputation-management-services">
                <li>Reputation</li>
              </Link>
              <Link to="/social-media-marketing-services">
                <li>Social Media Managment</li>
              </Link>
              <Link to="/web-development-company">
                {" "}
                <li>Web Development</li>
              </Link>
              <Link to="/marketing-automation-services">
                <li>Marketing Automation</li>
              </Link>
            </ul>
          </div>
          <div className="list list-2">
            <ul>
              <h4>INDUSTRIES</h4>
              <li>
                <Link to="/luxury-communities/seo-services">
                  Luxury Communities
                </Link>
              </li>
              <li>
                <Link to="/Franchise-industry">Franchise</Link>
              </li>
              <li>
                <Link to="/E-commerce-industry">E-Commerce</Link>
              </li>
              <li>
                <Link to="/Crypto-industry">Crypto</Link>
              </li>
              <li>
                <Link to="/Assisted-Living-industry">Assisted Living</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="list list-3">
            <ul>
              <h4>COMPANY</h4>
              <Link to="/about-us">
                {" "}
                <li>About Us</li>
              </Link>
              <li>
                <NavHashLink to="/about-us#our-team">Our Team</NavHashLink>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                {" "}
                <NavHashLink to="/#awards">Awards</NavHashLink>
              </li>
            </ul>
          </div>
          <div className="list list-4">
            <ul>
              <h4>CAREERS</h4>
              <li>Careers</li>
              <li>
                <Link to="/about-us">Applicant Privacy</Link>
              </li>
            </ul>
            <ul>
              <h4>CONTACT US</h4>
              <li>
                <Link to="/contact-us">Business Inquiries</Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/sslsolution.net">
                  @Facebook
                </Link>
              </li>
              <li>
                <Link to="https://api.whatsapp.com/send?phone=923444997389">
                  @Whatsapp
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/ssl-solutions-72374621b/">
                  @LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="list list-5">
            <ul>
              <h4>BLOG</h4>
              <li>Marketing news</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-left">
            <span>
              <FaPhoneVolume className="icon" />
            </span>
            <h2>Need Help? Say Hello</h2>
            <h1>+92-312-4700804</h1>
          </div>
          <div className="bottom-right">
            <div className="bottom-right-address">
              <FaLocationDot className="add-icon" />

              <span>313, 3rd Floor, Landmark Plaza Jail Road, Lahore</span>
            </div>
            <div className="bottom-right-email">
              <IoIosMail className="mail-icon" />

              <span>contact@demsteam.com</span>
            </div>
          </div>
        </div>
        <p>
          <strong>Copyright © 2023</strong> - Digital Explorers Marketing
          Services. <b>(DEMS)</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
