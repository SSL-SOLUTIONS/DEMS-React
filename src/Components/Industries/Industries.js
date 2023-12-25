import React, { useState, useEffect } from "react";
import "./Industries.css";

const Industries = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateSlider = () => {
      const slider = document.querySelector(".accord ul");
      slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
    };

    window.addEventListener("resize", () => {
      setCardWidth(getCardWidth());
      updateSlider();
    });

    setCardWidth(getCardWidth());
    updateSlider();

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [currentIndex, cardWidth]);

  const getCardWidth = () => {
    const card = document.querySelector(".accord ul li");
    return card ? card.offsetWidth + 20 : 0; // Include margin-right
  };

  const cards = [
    {
      title: "Luxury Communities",
      description:
        "From gorgeous websites to strategic digital advertising campaigns, we work closely with your team to showcase the best views and angles of your luxury communities to your online customers.",
      image: "/logos/industry.jpg",
    },
    {
      title: "Crypto Currency ",
      description:
        "Usher in the most cutting edge Web3 technology and reveal your crypto project to users throughout the digital landscape. Use proven SEO, PPC, and social media tactics to accumulate interest in your blockchain business.",
      image: "/logos/crypto.jpg",
    },
    {
      title: "Franchise",
      description:
        "Take your franchise to the next level with a digital marketing strategy that amplifies your online footprint. Capture new customers on any platform, from social media networks to the biggest search engines around the world.",
      image: "/logos/Franchise.jpg",
    },
    {
      title: "Ecommerce",
      description:
        "Get more clicks and conversions for your e-commerce store and scale your sales to record highs. Promote your brand across web and gain new followers who spread the word for you.",
      image: "/logos/ecommerce.jpg",
    },
    {
      title: "Others",
      description:
        "Whether you operate in the B2B space or the finance industry, our experts can help you develop a cohesive digital marketing strategy that’s designed to give you a competitive advantage in your niche and tackle your most pressing business goals.",
      image: "/logos/others.jpg",
    },
  ];

  return (
    <div className="accord">
      <h1>
        Our Projects And Experience Span Across A Wide Range Of Top Growing
        Industries.
      </h1>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            <img src={card.image} alt={card.title} />
            <div className="title">
              <a href="#">{card.title}</a>
              <p>{card.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Industries;
