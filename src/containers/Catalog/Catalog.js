import React, {useState, useEffect} from "react";
import Header from "../../Icons/image.svg";
import Product1 from "../../Icons/product1.svg";
import Product2 from "../../Icons/product2.svg";
import Product3 from "../../Icons/product3.svg";
import header from "../../Icons/header2.png";
import Product4 from "../../Icons/product4.svg";
import Layout  from "../App/Layout/Layout";

import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
} from "./Catalog.styled";
import CardCatalog from "../../components/CardCatalog/CardCatalog";
const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };
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
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div>
       <Layout onSearchChange={setSearchTerm} />
      <CardWrapper
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "40px",
        }}
      >
        {filteredData.map((item) => (
          <CardCatalog
            key={item.id}
            title={item.title}
            text={item.text}
            imageSrc={item.image}
            price={item.price}
        />
        ))}
        </CardWrapper>
      </div>
  );
};
export default Catalog;
