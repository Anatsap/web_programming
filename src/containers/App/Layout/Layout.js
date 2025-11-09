import React, {useState} from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Logo from "../../../Icons/Logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Layout = ({ onSearchChange }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };
  const cartItems = useSelector(state => state.cart.cart)
return (
  <StyledHeader title="Cein">
    <div>
      <IconsWrapper>
        <img src={Logo} alt="Logo Cein" style={{ height: '20px' }} />
      </IconsWrapper>
    </div>
    <div style={{flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
    <input
          type="text"
          placeholder="Search items..."
          onChange={handleSearchChange} 
          style={{
            padding: '8px 15px',
            borderRadius: '20px',
            border: '1px solid #ccc',
            width: '100%',
            maxWidth: '300px',
            fontSize: '14px'
          }}
        />
    </div>
    <div>
      <IconsWrapper>
        <SearchOutlined />
        <Link to="/checkout">
        <ShoppingCartOutlined />
        <small 
        style={{
          position: 'absolute',
          top: '90px',
          right: '35px',
          background: 'red',
          borderRadius: '50%',
          padding: '2px 6px',
          color: 'white'
        }}
        >
        {cartItems.length}
        </small>
        </Link>
      </IconsWrapper>
    </div>
  </StyledHeader>
)};

export default Layout;