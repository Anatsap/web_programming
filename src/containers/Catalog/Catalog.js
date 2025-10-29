import React, {useState, useEffect, Fragment} from "react";
import Header from "../../Icons/image.svg";
import Product1 from "../../Icons/product1.svg";
import Product2 from "../../Icons/product2.svg";
import Product3 from "../../Icons/product3.svg";
import header from "../../Icons/header2.png";
import Product4 from "../../Icons/product4.svg";
import Layout  from "../App/Layout/Layout";
import {products} from "../Products"

import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
  FilterWrapper,
  StyledText1,
} from "./Catalog.styled";
import CardCatalog from "../../components/CardCatalog/CardCatalog";
const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState({
  priceRange: 'Any',
});

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
  const getFilteredData = () => {
    const term = searchTerm.trim().toLowerCase();
    let filtered = data;
    if(term){
      filtered = filtered.filter((item) =>
      item.title.toLowerCase().includes(term)
    );
    };
    if (activeFilters.priceRange === 'Low') {
      filtered = filtered.filter(item => item.price <= 50);
    } else if (activeFilters.priceRange === 'Medium') {
      filtered = filtered.filter(item => item.price > 50 && item.price <= 200);
    }
  
    return filtered;
  };
  const displayedData = getFilteredData();

  return (
    <div>
       <Layout onSearchChange={setSearchTerm} />
       <FilterWrapper>
        <h3>Price Range: </h3>
        <select onChange={(e) => setActiveFilters({ ...activeFilters, priceRange: e.target.value })}>
          <option value="Any">Any</option>
          <option value="Low">Low (0-50)</option>
          <option value="Medium">Medium (51-200)</option>
        </select>
        </FilterWrapper>
      <CardWrapper
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "40px",
        }}
      >
        {displayedData.map((item) => (
          <CardCatalog
            id={item.id}
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
