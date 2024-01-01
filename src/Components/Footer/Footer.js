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
              <li>
                <Link to="/contact-us">Careers</Link>
              </li>
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
                <Link
                  to="https://www.facebook.com/sslsolution.net"
                  target="_blank"
                >
                  @Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://api.whatsapp.com/send?phone=923444997389"
                  target="_blank"
                >
                  @Whatsapp
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/ssl-solutions-72374621b/"
                  target="_blank"
                >
                  @LinkedIn
                </Link>
              </li>
            </ul>
          </div>
          <div className="list list-5">
            <ul>
              <h4>BLOG</h4>
              <li>
                <Link to="/Marketing-News">Marketing news</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="bottom-left">
            <span>
              <FaPhoneVolume className="icon" />
            </span>
            <h2>Need Help? Say Hello</h2>
            <h1><a href="tel:+923124700804">+92-312-4700804</a></h1>
          </div>
          <div className="bottom-right">
            <div className="bottom-right-address">
              <FaLocationDot className="add-icon" />

              <span>
                <a href="https://www.google.com/maps/place/SSL+SOLUTIONS/@31.5349517,74.3462811,19z/data=!3m1!4b1!4m6!3m5!1s0x391905d3e3ae6b77:0x157a2f53f97b67c6!8m2!3d31.5349506!4d74.3469248!16s%2Fg%2F11lpw1_rd4?entry=ttu" target="_blank">
                  {" "}
                  313, 3rd Floor, Landmark Plaza Jail Road, Lahore
                </a>
              </span>
            </div>
            <div className="bottom-right-email">
              <IoIosMail className="mail-icon" />

              <span>
                <a href="mailto:contact@demsteam.com">contact@demsteam.com</a>
              </span>
            </div>
          </div>
        </div>
        <p>
          <strong>Copyright © 2024</strong> - Digital Explorers Marketing
          Services. <b>(DEMS)</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
