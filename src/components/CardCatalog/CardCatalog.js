import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardCatalog.styled";
import product from "../../containers/ProductDetails/ProductDetails";
import { Link } from "react-router-dom";
const { Meta } = Card;

const CardCatalog = ({id, title='No title.', text, imageSrc, price }) => (
  <Card
    hoverable
    cover={
      <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
    <Footer>
      <p>${price}</p>
      <Link to={`/product/${id}`}>
        <button>Show More</button>
      </Link>
    </Footer>
  </Card>
);

export default CardCatalog;