import React from "react";
import "./TopBar.css";
import { IoCall } from "react-icons/io5";
import { Link} from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <div className="top-bar-wrapper">
        <div className="left-topBar">
          <Link to="/">
            {" "}
            <img src="/logos/DMA-logo.png" alt="DMA-logo" />
          </Link>
        </div>
        <div className="right-topBar">
          <div className="right-phone">
            <IoCall className="phone-icon" />
            <span>+92 (312) 4700-804</span>
          </div>
          <Link to="/contact-us">
            <button>
              Request a Free Quote
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopBar;
