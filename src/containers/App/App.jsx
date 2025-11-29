import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import Layout from "./Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Provider } from "react-redux";
import store from '../../redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
    <div>
      {/* <Layout/> */}
      <Navigation />
      <Footer />
    </div>
    </Provider>
  );
};

export default App;



