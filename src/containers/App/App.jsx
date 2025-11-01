import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Layout from "./Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";
const App = () => {
  return (
    <div>
      {/* <Layout/> */}
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;