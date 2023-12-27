import React,{useEffect} from "react";
import Industries from "../Industries";
const AssistLiving = () => {
         useEffect(() => {
           document.title =
             "DEMS - Assist living Buisness and Company | Our Assist Living Services";
         }, []);
  return (
    <>
      <Industries
        Service="ASSISTED LIVING"
        Name="SEO"
        Desc="Our SEO specialists know the ins and outs of the assisted living industry. We build B2B and B2C boosting SEO strategies that bring the market to you.

"
        funcTitle="ASSISTED LIVING KEYWORDS

"
        funcSlogan="REACH MORE PEOPLE WHO NEED YOUR SERVICES.



"
        funcDesc="We speak your language — and your clients' as well. At the heart of all of our marketing campaigns are the keywords your clients' are using to find you and your competition. We make sure you two understand each other.



"
        card1Title="COMPETITIVE ASSISTED LIVING SEO SERVICES

"
        card1Heading="Get on the front pages.
"
        card1Desc="Your online clients aren't browsing past page two to find you. We do extensive market research of your competition and why your clients are responding to them to build full-feature SEO-optimized strategies that push you ahead on SERPs (search engine results pages).

"
        card1BtnText="CONTACT US"
        card1Img="/servicePage/card-1.jpg"
        card2Title="ASSISTED LIVING INDUSTRY WHITEPAPERS AND CONTENT








"
        card2Heading="Demonstrate your dominance and expertise in the assisted living market.

"
        card2Desc="The stakes are high in the Assisted Living industry — quality of life is important to everyone. Your clients need to know that you're the real deal. Our content generation experts deliver authoritative whitepapers, industry news, and other reputation-boosting content that educates and reels in your clients.

"
        card2BtnText="Contact our Specialists"
        card2Img="/servicePage/seo-card2.jpg"
      />
    </>
  );
};

export default AssistLiving;
