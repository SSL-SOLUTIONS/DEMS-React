import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer";
import SalesTeam from "../../Components/SalesTeam/SalesTeam"
import "./Regards.css"
const Regards = () => {
  return (
    <>
      <Navbar />
      <div className="regards-wrapper">
        <h1>THANK YOU</h1>
        <h5>
          One of our digital marketing experts will be in touch very soon in
          order to better understand your objectives.
        </h5>
      </div>
      <SalesTeam/>
      <Footer />
    </>
  );
}

export default Regards