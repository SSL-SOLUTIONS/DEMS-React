import React,{useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Hero from "../../Components/Hero/Hero";
import Industries from '../../Components/Industries/Industries';
import Service from '../../Components/Services/Service';
import Excellence from '../../Components/Excellence/Excellence';
import DigitalAgency from '../../Components/DigitalAgency/DigitalAgency';
import SalesTeam from '../../Components/SalesTeam/SalesTeam';
import CommunityContainer from "../../Components/Communities/CommunityContainer";

const Home = () => {
  useEffect(() => {
    document.title = "Digital Marketing Agency, #1 Experts to approach";
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Industries />
      <Service />
      <CommunityContainer />
      <Excellence />
      <DigitalAgency />
      <SalesTeam />
      <Footer />
    </>
  );
}

export default Home