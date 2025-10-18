import React from "react";
import Header from "../../Icons/image.svg";
import Product1 from "../../Icons/product1.svg";
import Product2 from "../../Icons/product2.svg";
import Product3 from "../../Icons/product3.svg";
import header from "../../Icons/header2.png";
import Product4 from "../../Icons/product4.svg"
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
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
];

const Home = () => {
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
      <CardWrapper>
        {data.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
    </div>
  );
};

export default Home;