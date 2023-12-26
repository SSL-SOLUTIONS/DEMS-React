import React,{useEffect} from "react";
import Services from "../Services";

const SEO = () => {
  useEffect(() => {
    document.title = "Best SEO Services - Hire the #1 Ranked SEO Company";
  }, []);
  return (
    <>
      <Services
        Slogan="#1 RANKED"
        title=" SEO AGENCY"
        titleDesc="   Hire our award-winning SEO experts to deliver Page 1 organic
              results for your business."
        secondContSlogan="We Deliver Page 1 Rankings."
        SecondContTitle="Our experts pore over every on-page element."
        SecondContDesc=" On-page optimization involves updating your website methodically to
            increase its online visibility for those searching for the products
            or services you offer. SEO marketing requires significant time and
            skills to produce a competitive strategy for the digital
            marketplace. DMA conducts a site audit to understand the keywords
            your website targets, the quality of content on the website, and
            internal linking strategies to identify improvements to your SEO
            performance."
        card1Heading="RANK HIGHER ON GOOGLE"
        card1Title="OUR OFF PAGE STRATEGIES ROCK"
        card1Description="Your incoming links and outside presence affect your SEO performance. We have a proven track record of creating campaigns that utilize powerful resources to establish our clients' websites as authorities in their industry. Our process guarantees the success of each SEO campaign by producing Page 1 results and driving relevant traffic to crucial pages"
        card1BtnText="LEARN MORE"
        card2Heading="We Listen Before We Act."
        card2Title="Our customized SEO services match your business goals."
        card2Description="Before we start to work on any client's website, our audit process involves reviewing the content and its online presence across the World Wide Web. Our SEO professionals spend time getting to understand the work that has already been done and determine what areas are lacking. We create a plan to ensure the success of each website. We believe search engine optimization is not a one size fits all situation; our SEO campaigns are built specifically with that client in mind."
        card2BtnText="LEARN MORE"
        card3Heading="We Report on the Metrics That Matter."
        card3Title="Our dashboard keeps you informed every step of the way."
        card3Description="Every search engine optimization campaign is measured and presented to our clients to offer them an understanding of the work and the results that effort will achieve. Our transparency ensures that clients get the value they deserve while helping them make the best use of the campaign. We provide a dashboard for each SEO program to keep you informed on each part of the process for on-page and off-page optimization efforts."
        card3BtnText="Conact our team"
        lionTitle="Dominate Search Results"
        lionSlogan="Hire us to Focus on the Best Keywords."
        lionDesc="The key to success in SEO lies in the keywords. Our SEO experts meticulously analyze a wide selection of keywords to choose the best for your SEO objectives. We improve search performance by balancing the search volume of your keywords and their relevance to your audience."
      />
    </>
  );
};

export default SEO;
