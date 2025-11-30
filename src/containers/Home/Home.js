import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Icons/image.svg";
import header from "../../Icons/header2.png";
import searchTerm from "../App/Layout/Layout";
import products from "../Products";
import { useDispatch } from "react-redux";
import {
  SectionWrapper,
  StyledText,
  StyledButton,
  CardWrapper,
  StyledButton1,
  ButtonContainer,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";
import { resetCart } from "../../redux/cartSlice";


const Home = () => {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  // const handleLogout = (e) => {
  // //  localStorage.removeItem("loggedin");
  //   localStorage.clear();
  //   navigate("/login");
  // }
  // const handleLogout = () => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     localStorage.removeItem("cart_" + user.email);
  //   }
  
  //   localStorage.removeItem("user");
  //   dispatch(resetCart());
  //   window.location.reload();

  //   navigate("/login");
  // };
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(resetCart());
    navigate("/login");
  };
  

  
  const [visibleCount, setVisibleCount] = useState(3); 

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 3); 
  }
  const handleViewLess = () => {
    setVisibleCount(3);
  }

  const visible = products.slice(0, visibleCount);
  return (
    <div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
        marginBottom: "20px",
        gap: "10px",
      }}
    >
      <p style={{ fontSize: "22px", fontWeight: "600", margin: 0 }}>
        Welcome — {userName?.name}
      </p>

      <button
        onClick={handleLogout}
        type="button"
        className="btn btn-success btn-lg gradient-custom-4"
        style={{ width: "200px" }}
      >
        Logout
      </button>
    </div>

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
      <CardWrapper
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          padding: "40px",
        }}
      >
        {visible.map(({ title, text, image, price }, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            price={price}
            id={idx}
          />
        ))}
      </CardWrapper>
      {(handleViewMore || handleViewLess) && (
        <ButtonContainer>
          {handleViewMore && (
          <StyledButton1 onClick={handleViewMore}>View More</StyledButton1>)}
          {handleViewLess && (  
          <StyledButton1 onClick={handleViewLess}>View Less</StyledButton1>)}
        </ButtonContainer>
      )}
    </div>
  );
};


export default Home;