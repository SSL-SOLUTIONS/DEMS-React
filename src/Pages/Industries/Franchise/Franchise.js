import React,{useEffect} from "react";
import Industries from "../Industries";
const Franchise = () => {
        useEffect(() => {
          document.title = "DEMS - Franchise Buisness and Company | Our Franchise Services";
        }, []);
  return (
    <>
      <Industries
        Service="Franchises"
        Name="SEO SERVICES"
        Desc="Franchises have a difficult challenge in front of them to stand out to their local audiences. Our SEO experts deliver campaigns that raise the visibility of franchises in both general and local search results."
        funcTitle="OPTIMUM STRATEGY"
        funcSlogan="IMPACTFUL KEYWORDS"
        funcDesc="You can have the most powerful SEO strategy in the world, but it doesn't mean anything if you don't use the right keywords. We perform arduous research on each of your markets and target audiences to understand how they search online to produce the right keywords for your franchise SEO campaign."
        card1Title="GET YOUR FRANCHISE TO THE TOP OF GOOGLE.

"
        card1Heading="Our experts go in-depth to bring you there.
"
        card1Desc="The secret to SEO success lies in both on-page and off-page strategies. Our SEO team performs a deep analysis of your franchise's existing website and its presence online to improve the site’s content and structure. Off-page efforts are made in local directories and relevant franchise industry resources to build incoming links from reputable web sources. The result of this combined approach eclipses franchise advertisement channels and paid acquisition strategies.

"
        card1BtnText="CONTACT US"
        card1Img="/servicePage/card-1.jpg"
        card2Title="GET THE INSIDE LOOK AT YOUR FRANCHISE SEO.



"
        card2Heading="Understand the value your SEO campaign provides you.


"
        card2Desc="We believe in transparency. Our reports show you exact what our team is doing, what those efforts will achieve, and what those efforts have already achieved for your search presence. Your franchise marketing plan is laid out in plain English, offering you insight into how the results will affect lead generation and conversion. We can also help you see the value your SEO strategy is creating in local sales and your local search results.





"
        card2BtnText="Contact our Specialists"
        card2Img="/servicePage/seo-card2.jpg"
      />
    </>
  );
};

export default Franchise;
