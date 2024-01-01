import React, {useEffect} from "react";
import Services from "../Services";

const MarketAutomation = () => {
   useEffect(() => {
     document.title =
       "Best Market Automatoin Services- Hire the #1 DEM's Team  to Automate your Buisness and Services";
   }, []);
  return (
    <>
      <Services
        Slogan="COMPREHENSIVE"
        title="MARKETING AUTOMATION CONSULTING"
        titleDesc="Stop losing opportunities. We build conversion-driven marketing automation strategies."
        secondContSlogan="AUDIENCE RETENTION"
        SecondContTitle="KEEP VISITORS ENGAGED"
        SecondContDesc="The key to success in marketing automation is audience-building and retention. We use marketing automation as a way to build an audience of web users interested in what you have to offer. We help you identify critical facts and insights about your audience to help you better cater to their expectations."
        card1Heading="Dynamic Content Strategy"
        card1Title="Serve the right content to the right people."
        card1Description="Making the right impression from the start is crucial for marketing automation. We connect you with the right marketing automation platform and strategy and ensure that the content on your website is catered to the audiences reaching it. Your website changes and evolves in real-time as your audience changes. Potential clients will see the most relevant information with a call to action to compel them to connect with you."
        card1BtnText="REQUEST A QUOTE"
        card2Heading="Automated Conversion Optimization"
        card2Title="Leverage marketing automation for better conversions."
        card2Description="DEMS helps large and small businesses to connect with their audiences in a more meaningful way. We build campaigns that aim to convert. Our approach to conversion optimization means letting your marketing automation improve itself over time as it learns more about your users. Our automation experts continue to improve messages and strategies based on long-term performance. Meanwhile, your marketing automation works to deliver dynamic content to each audience, automatically improving your ability to convert more business."
        card2BtnText="GET MORE INFORMATION"
        card3Heading="In-Depth Lead Capturing"
        card3Title="Give your sales team what they need to succeed."
        card3Description="While experiencing a surge in lead flow can be great for sales, it is necessary to understand your leads. Our approach to lead capturing ensures you can learn the most from each prospect, giving your sales team ample information about what they’re looking for and interested in. We connect your marketing automation to your sales efforts to document everything we know about them, leading to more effective sales calls and increased conversion rates."
        card3BtnText="Conact our team"
        lionTitle="CUSTOM CRM INTEGRATION"
        lionSlogan="CONNECT MARKETING & SALES"
        lionDesc="Achieve real-time syncing between your online audiences and your CRM software. Your sales team can be confident that the latest information is available as they make calls and connect with their sales prospects. We tie the desires of your audience to your sales team to improve conversions."
      />
    </>
  );
};

export default MarketAutomation;
