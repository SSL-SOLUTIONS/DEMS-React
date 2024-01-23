import React from 'react'
import "./Service.css"
import { Link, useNavigate } from 'react-router-dom';
const Service = () => {
    const navigate = useNavigate();

  return (
    <>
      <h1 className="service-head">Our Services</h1>
      <div className="service-wrapper">
        <div className="left-txt">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Services we can help you with.
          </h1>{" "}
          <br />
          <h6
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Leveraging digital marketing for any business requires a broad set
            of talent, tools, and strength in numbers. Let our team take care of
            the heavy lifting while we work with you to identify which services
            will benefit you the most and how we can maximize your reach with
            each marketing channel.
          </h6>
        </div>
        <div className="right-txt">
          <button onClick={() => navigate("/about-us")}>KNOW MORE</button>{" "}
          <br /> <br />
          <p>
            From building a new website to growing your social following, our
            digital experts are ready to help you achieve all your marketing
            goals.
          </p>
          <br />
          <br />
          <ul className="serviceList">
            <h6>
              Services we can help you with. <br /> (Please Visit by Clicking)
            </h6>
            <Link to="/seo-services">
              {" "}
              <li>SEO Services</li>
            </Link>
            <Link to="/local-seo-services">
              {" "}
              <li>Local SEO</li>
            </Link>
            <Link to="/enterprise-seo-services">
              {" "}
              <li> Enterprise SEO</li>
            </Link>
            <Link to="/link-building-services">
              {" "}
              <li>Link Building </li>
            </Link>
            <Link to="/google-ads-management-services">
              {" "}
              <li>Google PPC</li>
            </Link>
            <Link to="/youtube-advertising-services">
              {" "}
              <li>Youtube Marketing</li>
            </Link>
            <Link to="/facebook-advertising-services">
              {" "}
              <li>Facebook Marketing</li>
            </Link>
            <Link to="/reputation-management-services">
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