import React, { useState, useEffect, use } from "react";
import { useParams, Link } from "react-router-dom";
import get_product from "../../api/getProduct";
import { useDispatch  } from "react-redux";
import { addtoCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

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
  const dispatch = useDispatch()
  
  return (
    <div key={data.id} style={{ padding: "40px", textAlign: "center" }}>
      <img src={data.image} alt={data.title} style={{ width: "300px", borderRadius: "15px" }} />
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.description}</p>
      <p><strong>Price: ${data.price}</strong></p>
      <Link to="/catalog">
        <button onClick={ () => dispatch(addtoCart({
          title: data.title,
          text: data.text,
          description: data.description,
          price: data.price,
          image: data.image, 
          id: data.id
        }))} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          borderRadius: "10px",
          backgroundColor: "#D9BBAE",
          border: "none",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductDetails;

