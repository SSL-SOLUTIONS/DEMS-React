import React from "react";
import Communities from "../Communities";

const Other = () => {
  return (
    <>
      <Communities
        communityType="CUSTOM MARKETING"
        communityDescription="Unique solutions tailor-made to help you crush your business and industry goals."
        communityTitle="Made Just for You."
        price="850k"
        priceDescription="Estimated Savings"
        percent="+73"
        percentDescription="Marketing Spend Efficiency"
        userTitle="Joe D’Souza - Director"
        userDescription="We typically have to hire multiple agencies to help us with our different businesses. But DMA had the breadth of expertise to assist us with marketing across our various industries and brands."
        image="/communities/others.jpg"
      />
    </>
  );
};

export default Other;
