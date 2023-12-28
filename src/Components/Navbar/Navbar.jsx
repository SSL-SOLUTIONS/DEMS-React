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
        <label htmlFor="tm" id="toggle-menu">
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
                <Link to="/seo-services">SEO Services</Link>
              </li>

              <li>
                <Link to="/content-marketing-services">
                  Content Marketing Services
                </Link>
              </li>
              <li>
                <Link to="/local-seo-services">Local SEO</Link>
              </li>
              <li>
                <Link to="/ecommerce-seo-services">Ecommerce SEO</Link>
                <input type="checkbox" id="sm2" />
              </li>
              <li>
                <Link to="/link-building-services">Link Building Services</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/ppc-management-services">PPC</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/ppc-management-services">Free PPC Analysis</Link>
              </li>
              <li>
                <Link to="/">PPC Management Services</Link>
              </li>
              <li>
                <Link to="/ppc-retargeting-ads-services">Remarketing</Link>
              </li>
              <li>
                <Link to="/mobile-ppc-services">Mobile PPC</Link>
              </li>
              <li>
                <Link to="/contact-us">Specialized PPC Services</Link>
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
                <Link to="/reputation-management-services">
                  Free Reputation Management Analysis
                </Link>
              </li>
              <li>
                <Link to="/reputation-management-services">
                  Review Management Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  Specialized Reputation Management Services
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/social-media-marketing-services">SOCIAL MEDIA</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/social-media-marketing-services">
                  Free Social Media Analysis
                </Link>
              </li>
              <li>
                <Link to="/social-media-marketing-services">
                  Social Media Optimization Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us">Specialized Social Services</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/web-development-company">WEB DEVELOPMENT</Link>
            <input type="checkbox" id="sm1" />
            <ul className="sub-menu">
              <li>
                <Link to="/web-development-company">Free Website Analysis</Link>
              </li>
              <li>
                <Link to="/website-maintenance-services">
                  Website Maintenance Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us">Specialized Development Services</Link>
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
                <Link to="/marketing-automation-services">
                  Marketing Automation Services
                </Link>
              </li>
              <li>
                <Link to="/contact-us">
                  Specialized Marketing Automation Services
                </Link>
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
              <li>
                <Link to="/testimonials">Reviews</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
