import React from "react";
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

const Layout = () => (
  <StyledHeader title="Glay Shop">
    <div>
      <IconsWrapper>
        <img src={Logo} alt="Logo Cein" style={{ height: '20px' }} />
      </IconsWrapper>
    </div>
    <div>
      <IconsWrapper>
        <SearchOutlined />

        <ShoppingCartOutlined />
      </IconsWrapper>
    </div>
  </StyledHeader>
);

export default Layout;