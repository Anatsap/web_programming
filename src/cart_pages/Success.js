import React from 'react';
import success_t from "../Icons/success_t.jpg";
import { Colorr, Styled, Icons } from "./Success.styled";

const Success = () => {
  return (
    <Colorr>
      <Styled title="Cein" />
      <div style={{ 
        backgroundColor: "#f0f8ff",
        textAlign: "center", 
        marginBottom: "30px"
      }}></div>
      <h1 style={{textAlign: "center",  marginTop: "20px" }}>
          Your order was successfully submitted!
        </h1>
        <p style={{textAlign: "center",  marginTop: "20px" }}>
            Thank you for your purchase
        </p>

      <div style={{ 
        display: "flex",
        justifyContent: "center",
        marginBottom: "100px"
      }}>
        <Icons>
          <img src={success_t} alt="success" style={{ width: "800px", textAlign: "center"}} />
        </Icons>
      </div>
    </Colorr>
  );
};

export default Success;
