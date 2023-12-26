import React from "react";
import TopBar from "../TopBar/TopBar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
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
            <Link to="/seo-services">SEO</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/">Free SEO Analysis</Link>
              </li>
              <li>
                <Link to="/">SEO Services</Link>
              </li>

              <li>
                <Link to="/">Content Marketing Services</Link>
              </li>
              <li>
                <Link to="/">Local SEO</Link>
              </li>
              <li>
                <Link to="/">Ecommerce SEO</Link>
                <input type="checkbox" id="sm2" />
              </li>
              <li>
                <Link to="/">Link Building Services</Link>
              </li>
              <li>
                <Link to="/">Specialized SEO Services</Link>
                <input type="checkbox" id="sm2" />
              </li>
            </ul>
          </li>

          <li>
            <Link to="/ppc-management-services">PPC</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/">Free PPC Analysis</Link>
              </li>
              <li>
                <Link to="/">PPC Management Services</Link>
              </li>
              <li>
                <Link to="/">Remarketing</Link>
              </li>
              <li>
                <Link to="/">Mobile PPC</Link>
              </li>
              <li>
                <Link to="/">Specialized PPC Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/reputation-management-services">
              REPUTATION MANAGEMENT
            </Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/">Free Reputation Management Analysis</Link>
              </li>
              <li>
                <Link to="/">Reputation Management Services</Link>
              </li>
              <li>
                <Link to="/">Review Management Services</Link>
              </li>
              <li>
                <Link to="/">Specialized Reputation Management Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/social-media-marketing-services">SOCIAL MEDIA</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/">Free Social Media Analysis</Link>
              </li>
              <li>
                <Link to="/">Social Media Optimization Services</Link>
              </li>
              <li>
                <Link to="/">Specialized Social Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/web-development-company">WEB DEVELOPMENT</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/">Free Website Analysis</Link>
              </li>
              <li>
                <Link to="/">Web Development Services</Link>
              </li>
              <li>
                <Link to="/">Mobile Development Services</Link>
              </li>
              <li>
                <Link to="/">Website Maintenance Services</Link>
              </li>
              <li>
                <Link to="/">Specialized Development Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/marketing-automation-services">
              MARKETING AUTOMATION
            </Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/">Free Marketing Automation Analysis</Link>
              </li>
              <li>
                <Link to="/">Marketing Automation Services</Link>
              </li>
              <li>
                <Link to="/">Specialized Marketing Automation Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/luxury-communities/seo-services/">Industries</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/luxury-communities/seo-services/">
                  Luxury Communities
                </Link>
              </li>
              <li>
                <Link to="/Franchise-industry">Franchise</Link>
                <input type="checkbox" id="sm2" />
              </li>
              <li>
                <Link to="/E-commerce-industry">E-Commerce</Link>
              </li>
              <li>
                <Link to="/Crypto-industry">Crypto</Link>
              </li>
              <li>
                <Link to="/Assisted-Living-industry">Assisted Living</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about-us">ABOUT</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/contact-us">Contact</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
