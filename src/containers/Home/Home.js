import React, { useState } from "react";
import Header from "../../Icons/image.svg";
import header from "../../Icons/header2.png";
import searchTerm from "../App/Layout/Layout";
import products from "../Products";
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
  StyledButton1,
  ButtonContainer,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";


const Home = () => {
  const [visibleCount, setVisibleCount] = useState(3); 

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 3); 
  }
  const handleViewLess = () => {
    setVisibleCount(3);
  }

  const visible = products.slice(0, visibleCount);
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