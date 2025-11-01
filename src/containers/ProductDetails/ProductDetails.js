import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../Products";
const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  if (!product) return <p>Product not found</p>;

  return (
    <div key={product.id} style={{ padding: "40px", textAlign: "center" }}>
      <img src={product.image} alt={product.title} style={{ width: "300px", borderRadius: "15px" }} />
      <h1>{product.title}</h1>
      <p>{product.text}</p>
      <p>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>
      <Link to="/catalog">
        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "10px",
          backgroundColor: "#D9BBAE",
          border: "none",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Back to Catalog
        </button>
      </Link>
    </div>
  );
};

export default ProductDetails;

