import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Hero from "../../Components/Hero/Hero";
import Industries from '../../Components/Industries/Industries';
import Service from '../../Components/Services/Service';
import Luxury from '../../Components/Communities/Luxury/Luxury';
import Excellence from '../../Components/Excellence/Excellence';
import DigitalAgency from '../../Components/DigitalAgency/DigitalAgency';
import SalesTeam from '../../Components/SalesTeam/SalesTeam';

const Home = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <Industries/>
    <Service/>
    <Luxury/>
    <Excellence/>
    <DigitalAgency/>
    <SalesTeam/>
    <Footer/>
   </>
  )
}

export default Home