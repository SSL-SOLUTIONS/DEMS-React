import React, { useState } from "react";
import Communities from "../Communities/Communities";

const CommunityContainer = () => {
  const [activeLink, setActiveLink] = useState("Luxury");

  const communityData = {
    Luxury: {
      communityType: "REAL ESTATE MARKETING",
      communityDescription:
        " Publish targeted PPC ads to luxury community users that other agencies don’t know how to reach.",
      communityTitle: "PPC Ads Specialized for Luxury Communities",
      price: "3M",
      priceDescription: "Additional Revenue Generated",
      percent: "4,000",
      percentDescription: "ROAS",
      userTitle: "Wade Warren",
      userDescription:
        "Our conversions increased by 34% after just 1 month of running new PPC campaigns. DEMS guided us through every step of the planning phase, from research to launch.",
      image: "/communities/buildings.jpg",
    },
    Crypto: {
      communityType: "BLOCKCHAIN MARKETING",
      communityDescription:
        "Maintain a rock solid reputation for your crypto project with our reputation management services.",
      communityTitle: "Crypto Credibility",
      price: "23",
      priceDescription: "Additional Revenue Generated",
      percent: "+403",
      percentDescription: "Increase in Token value",
      userTitle: "David Lynch - Director",
      userDescription:
        "The team at DEMS was surprisingly knowledgeable about the crypto space. They did a phenomenal job helping us with our PR and overall brand management.",
      image: "/communities/crypto.jpg",
    },
    Ecommerce: {
      communityType: "ONLINE RETAIL MARKETING",
      communityDescription:
        "Build a brand around your product and leverage word-of-mouth with your following.",
      communityTitle: "Social Media Marketing for E-Commerce",
      price: "1.2m",
      priceDescription: "Average Reach per Organic Post",
      percent: "+400",
      percentDescription: "New Followers",
      userTitle: "Serena DiSora- CEO",
      userDescription:
        "We gave them all our brand assets and they helped us put together a full editorial calendar, all scheduled to post ahead of schedule. And it really helped increase our overall brand awareness, even off social media platforms.",
      image: "/communities/ecommerce.jpg",
    },
    Franchise: {
      communityType: "MULTI-LOCATION MARKETING",
      communityDescription: "Franchise-Focused SEO",
      communityTitle: "Franchise-Focused SEO",
      price: "13M",
      priceDescription: "Revenue Generated",
      percent: "+4,800",
      percentDescription: "Increase in Organic Traffic",
      userTitle: "James McNamara",
      userDescription:
        "“DEMS took our site from 300 visitors a day to over 10,000 in just 3 months by helping us build high-quality backlinks.",
      image: "/communities/franchise.jpg",
    },
    Other: {
      communityType: "CUSTOM MARKETING",
      communityDescription:
        "Unique solutions tailor-made to help you crush your business and industry goals.",
      communityTitle: "Made Just for You.",
      price: "850k",
      priceDescription: "Estimated Savings",
      percent: "+73",
      percentDescription: "Marketing Spend Efficiency",
      userTitle: "Joe D’Souza - Director",
      userDescription:
        "We typically have to hire multiple agencies to help us with our different businesses. But DEMS had the breadth of expertise to assist us with marketing across our various industries and brands.",
      image: "/communities/others.jpg",
    },
  };

  return (
    <div>
      {/* Render the community links */}
      <div className="comm-links">
        {Object.keys(communityData).map((link) => (
          <button
            key={link}
            onClick={() => setActiveLink(link)}
            className={activeLink === link ? "active" : "link"}
          >
            {link}
          </button>
        ))}
      </div>

      {/* Render the selected community content */}
      <Communities {...communityData[activeLink]} />
    </div>
  );
};

export default CommunityContainer;
