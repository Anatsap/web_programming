import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import get_product from "../../api/getProduct";

const ProductDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
        get_product({
            id: Number(id),
            setData: setData,
            setError: setError,
            setLoading: setLoading
        })
    }, [id])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message || error}</p>;
    if (!data) return <p>Product not found</p>;

  return (
    <div key={data.id} style={{ padding: "40px", textAlign: "center" }}>
      <img src={data.image} alt={data.title} style={{ width: "300px", borderRadius: "15px" }} />
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.description}</p>
      <p><strong>Price: ${data.price}</strong></p>
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

