import axios from "axios";
import React, {useState, useEffect, Fragment} from "react";
import getActivity from "../../api/getProducts";
import Header from "../../Icons/image.svg";
import Layout  from "../App/Layout/Layout";


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
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({
  priceRange: 'Any',
});

useEffect(() => {
  axios.get("/products")
    .then(res => setProducts(res.data))
    .catch(err => console.error("Error :", err));
}, []);


useEffect(() => {
  getActivity({
    chosen: { search: searchTerm, priceRange: activeFilters.priceRange },
    setData,
    setLoading,
    setError,
  });
}, [searchTerm, activeFilters.priceRange]);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message || error}</div>;

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
        <select
          value={activeFilters.priceRange}
          onChange={(e) =>
            setActiveFilters({ ...activeFilters, priceRange: e.target.value })
          }
        >
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
