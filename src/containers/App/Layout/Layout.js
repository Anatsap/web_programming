import React, {useState} from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import {
  TwitterOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  InstagramOutlined,
  FacebookOutlined,
  AliwangwangOutlined,
} from "@ant-design/icons";
import Logo from "../../../Icons/Logo.svg";

const Layout = ({ onSearchChange }) => {
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

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

        <ShoppingCartOutlined />
      </IconsWrapper>
    </div>
  </StyledHeader>
)};

export default Layout;