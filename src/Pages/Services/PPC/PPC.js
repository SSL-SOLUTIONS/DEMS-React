import React, { useEffect } from "react";
import Services from "../Services";

const PPC = () => {
  useEffect(() => {
    document.title =
      "Best PPC Agency - Hire the #1 Ranked PPC Company to Manage your Buisness";
  }, []);
  return (
    <>
      <Services
        Slogan="#1 RANKED"
        title="PPC AGENCY"
        titleDesc="Hire us to lower your costs and increase your conversions on Google Ads and Facebook."
        secondContSlogan="CONVERT EVEN IF THEY LEAVE YOU."
        SecondContTitle="POWERFUL RETARGETING STRATEGIES."
        SecondContDesc="Make a second effort to appeal to prospective buyers. We build retargeting campaigns to make an audience out of those visitors who don't convert and make additional efforts to remind them why they first considered you. We use this to appeal to and bring them in as a customer."
        card1Heading="Our Campaigns Attract and Convert"
        card1Title="Expert PPC management services for real results."
        card1Description="We build each of our campaigns to produce the best results possible. Each pay-per-click management campaign is done based on years of research and analysis to improve awareness and understanding of web users and their diverse behaviors and preferences. We have built PPC campaigns for several industries in the market, giving our experts the knowledge to make attractive campaigns that convert. We report in real-time to show our clients the value they are receiving, and we are constantly monitoring performance in both short- and long-term schedules."
        card1BtnText="Request a quote"
        card2Heading="Our Ads Generate New Customers for You."
        card2Title="We build each ad for appeal, relevance, and conversion."
        card2Description="To ensure each campaign offers the best return on investment (ROI), we build each ad and test it on its merits. Our PPC experts guarantee that every ad used in our campaigns earns its spot by trying out click-through and conversion rates to replace non-performers with more effective ads. Whether it s a textual ad served alongside search results or a banner ad on carefully selected display network sites, each ad is built with the target location and audience in mind to produce the best results."
        card2BtnText="Get More Information"
        card3Heading="Agile use of automation = better results."
        card3Title="PPC automation for value optimization."
        card3Description="A careful balance of automation and manual intervention is necessary to get the most out of your campaign. Our PPC management experts are involved in every step of the campaign, from the initial research and creation to evaluating the campaign’s performance and results."
        card3BtnText="Conact our team"
        lionTitle="LANDING PAGE TESTING"
        lionSlogan="ACHIEVE HIGHER CONVERSIONS"
        lionDesc="Your landing page is your best effort at appealing to prospective buyers. We perform multi-variate A/B testing on landing pages to figure out which landing pages achieve the desired conversions and which do not function to our standards. The purpose of this is to ensure that each campaign achieves optimal results."
      />
    </>
  );
};

export default PPC;
