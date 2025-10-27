import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardCatalog.styled";

const { Meta } = Card;

const CardCatalog = ({ title='No title.', text, imageSrc, price }) => (
  <Card
    hoverable
    cover={
      <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
    <Footer>
      <p>${price}</p>
      <Button>Show More</Button>
    </Footer>
  </Card>
);

export default CardCatalog;