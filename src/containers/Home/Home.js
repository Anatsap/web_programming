import React, { useState } from "react";
import Header from "../../Icons/image.svg";
import Product1 from "../../Icons/product1.svg";
import Product2 from "../../Icons/product2.svg";
import Product3 from "../../Icons/product3.svg";
import header from "../../Icons/header2.png";
import Product4 from "../../Icons/product4.svg";
import searchTerm from "../App/Layout/Layout"
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
  StyledButton1,
  ButtonContainer,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";

const data = [
  {
    title: "Pure Micellar Cleansing Water",
    text: "Gentle micellar water",
    image: Product1,
    price: 32,
  },
  {
    title: "The Essential Kit",
    text:
      "Essentials for every skincare routine",
    image: Product2,
    price: 124,
  },
  {
    title: "Reverence Aromatique Hand Balm",
    text:
      "Citrus, woody and herbaceous aroma",
    image: Product3,
    price: 25,
  },
  {
    title: "Classic Skin Care Kit",
    text:
      "A replenishing ensemble for dry skin",
    image: Product4,
    price: 85,
  },
  {
    title: "Reverence Aromatique Hand Balm",
    text:
      "Citrus, woody and herbaceous aroma",
    image: Product3,
    price: 25,
  },
];


const Home = () => {
  const [visibleCount, setVisibleCount] = useState(3); 

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 3); 
  }
  const handleViewLess = () => {
    setVisibleCount(3);
  }

  const visible = data.slice(0, visibleCount);
  return (
    <div>
      { }
      <SectionWrapper backgroundImage={header}>
        <StyledText>
          <p>Treat Your Body Like Your Face</p>
          <h1>Highly Effective Body Care</h1>
          <p>
            A combination of nature and advanced technology. 
            Vegan, natural, skin-friendly and rich in effective biotechnological ingredients.
          </p>
          <StyledButton size="large">Discover More</StyledButton>
        </StyledText>
        <img src={Header} />
      </SectionWrapper>
      <CardWrapper
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "40px",
        }}
      >
        {visible.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
      {(handleViewMore || handleViewLess) && (
        <ButtonContainer>
          {handleViewMore && (
          <StyledButton1 onClick={handleViewMore}>View More</StyledButton1>)}
          {handleViewLess && (  
          <StyledButton1 onClick={handleViewLess}>View Less</StyledButton1>)}
        </ButtonContainer>
      )}
    </div>
  );
};


export default Home;