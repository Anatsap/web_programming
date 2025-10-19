import React from "react";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined
  } from "@ant-design/icons";
  import Logo from "../../../Icons/whiteLogo.svg";
const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
      <img src={Logo} alt="Logo" style={{ height: '24px' }} />
      </LogoWrapper>
      <p>Follow us</p>
      <IconsWrapper>
          <IconBase component={YoutubeOutlined} color='#FF0000'/>
          <IconBase component={TwitterOutlined} color='#03A9F4' />
          <IconBase component={LinkedinOutlined} color='#007AB9'/>
          <IconBase component={InstagramOutlined} color='#ffffff'/>
      </IconsWrapper>
      <StyledText>CEIN. 2019 KINS All rights reserved.</StyledText>
      
    </Wrapper>
  );
};

export default Footer;