import React from 'react'
import "./Service.css"
import { Link } from 'react-router-dom';
const Service = () => {
  return (
    <>
      <h1 className="service-head">Our Services</h1>
      <div className="service-wrapper">
        <div className="left-txt">
          <h1>Services we can help you with.</h1> <br />
          <h6>
            Leveraging digital marketing for any business requires a broad set
            of talent, tools, and strength in numbers. Let our team take care of
            the heavy lifting while we work with you to identify which services
            will benefit you the most and how we can maximize your reach with
            each marketing channel.
          </h6>
        </div>
        <div className="right-txt">
          <button>KNOW MORE</button> <br /> <br />
          <p>
            From building a new website to growing your social following, our
            digital experts are ready to help you achieve all your marketing
            goals.
          </p>
          <br />
          <br />
          <ul>
            <h4>Services we can help you with.</h4>
            <Link to="/seo-services">
              {" "}
              <li>SEO Services</li>
            </Link>
            <Link to="/seo-services">
              {" "}
              <li>Local SEO</li>
            </Link>
            <Link to="/seo-services">
              {" "}
              <li> Enterprise SEO</li>
            </Link>
            <Link to="">
              {" "}
              <li>Link Building </li>
            </Link>
            <Link to="">
              {" "}
              <li>Google PPC</li>
            </Link>
            <Link to="">
              {" "}
              <li>Youtube Marketing</li>
            </Link>
            <Link to="">
              {" "}
              <li>Facebook Marketing</li>
            </Link>
            <Link to="">
              {" "}
              <li>Reputation Management</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Service