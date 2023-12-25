import React from "react";
import TopBar from "../TopBar/TopBar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  return (
    <>
      <TopBar />
      <nav id="menu">
        <label for="tm" id="toggle-menu">
          <span className="drop-icon">
            <GiHamburgerMenu />
          </span>
        </label>
        <input type="checkbox" id="tm" />
        <ul className="main-menu clearfix">
          <li>
            <Link to="/seo-services">
              SEO
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" for="sm1">
                ▾
              </label>
            </Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Free SEO Analysis</a>
              </li>
              <li>
                <a href="#">SEO Services</a>
              </li>

              <li>
                <a href="#">Content Marketing Services</a>
              </li>
              <li>
                <a href="#">Local SEO</a>
              </li>
              <li>
                <a href="#">Ecommerce SEO</a>
                <input type="checkbox" id="sm2" />
              </li>
              <li>
                <a href="#">Link Building Services</a>
              </li>
              <li>
                <a href="#">Specialized SEO Services</a>
                <input type="checkbox" id="sm2" />
              </li>
            </ul>
          </li>

          <li>
            <Link to="/ppc-management-services">
              PPC
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" for="sm1">
                ▾
              </label>
            </Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Free PPC Analysis</a>
              </li>
              <li>
                <a href="#">PPC Management Services</a>
              </li>
              <li>
                <a href="#">Remarketing</a>
              </li>
              <li>
                <a href="#">Mobile PPC</a>
              </li>
              <li>
                <a href="#">Specialized PPC Services</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/reputation-management-services">
              REPUTATION MANAGEMENT
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" for="sm1">
                ▾
              </label>
            </Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Free Reputation Management Analysis</a>
              </li>
              <li>
                <a href="#">Reputation Management Services</a>
              </li>
              <li>
                <a href="#">Review Management Services</a>
              </li>
              <li>
                <a href="#">Specialized Reputation Management Services</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/social-media-marketing-services">
              SOCIAL MEDIA
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" for="sm1">
                ▾
              </label>
            </Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Free Social Media Analysis</a>
              </li>
              <li>
                <a href="#">Social Media Optimization Services</a>
              </li>
              <li>
                <a href="#">Specialized Social Services</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/web-development-company">WEB DEVELOPMENT</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Free Website Analysis</a>
              </li>
              <li>
                <a href="#">Web Development Services</a>
              </li>
              <li>
                <a href="#">Mobile Development Services</a>
              </li>
              <li>
                <a href="#">Website Maintenance Services</a>
              </li>
              <li>
                <a href="#">Specialized Development Services</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/marketing-automation-services">
              MARKETING AUTOMATION
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" for="sm1">
                ▾
              </label>
            </Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Free Marketing Automation Analysis</a>
              </li>
              <li>
                <a href="#">Marketing Automation Services</a>
              </li>
              <li>
                <a href="#">Specialized Marketing Automation Services</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/industries">
              Industries
              <span className="drop-icon">▾</span>
              <label title="Toggle Drop-down" className="drop-icon" for="sm1">
                ▾
              </label>
            </Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <a href="#">Luxury Communities</a>
              </li>
              <li>
                <a href="#">Franchise</a>
                <input type="checkbox" id="sm2" />
              </li>
              <li>
                <a href="#">E-Commerce</a>
              </li>
              <li>
                <a href="#">Crypto</a>
              </li>
              <li>
                <a href="#">Assisted Living</a>
              </li>
              <li>
                <a href="#">Other Industries</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about-us">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
