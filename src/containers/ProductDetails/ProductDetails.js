import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import get_product from "../../api/getProduct";
import { useDispatch  } from "react-redux";
import { addtoCart, increment, decrement } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { setselectedOption } from '../../redux/formSlice';

const ProductDetails = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const [selectedOption, setselectedOption] = useState("Jar");
  // const handleChange = (event) => {
  //   dispatch(setselectedOption(event.target.value));
  // };

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
    <div key={data.id}
    style={{ 
      padding: "150px", 
      textAlign: "center",
      backgroundColor: "#F5EFE7",   
      minHeight: "40vh"           
    }}>
      <img src={data.image} alt={data.title} style={{ width: "300px", borderRadius: "15px" }} />
      <h1>{data.title}</h1>
      <p>{data.text}</p>
      <p>{data.description}</p>
      <p><strong>Price: ${data.price}</strong></p>
      
      <h3 style={{ marginTop: "25px", fontSize: "18px", color: "#4a3f35" }}>
        Type of packaging:</h3>
      <select value={selectedOption} onChange={(e) => setselectedOption(e.target.value)}
        style={{
          padding: "10px 14px",
          borderRadius: "10px",
          border: "1px solid #c9c3bd",
          backgroundColor: "white",
          cursor: "pointer",
          fontSize: "15px",
          marginBottom: "20px"
        }}
      >
          <option value="Jar">Jar</option>
          <option value="Pump">Pump</option>
          <option value="Tube">Tube</option>
        </select>
      <div>
      <div className="add">
        <input 
        type="number"
        id="quantity"
        min="1"
        className="border p-1 w-16"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{
          width: "80px",
          marginLeft: "5px",
          padding: "10px",
          borderRadius: "10px",
          border: "1px solid #c9c3bd",
          textAlign: "center",
          fontSize: "16px"
        }}>
        </input>
      </div>
      <button
      onClick={() => {
        dispatch(
          addtoCart({
            title: data.title,
            text: data.text,
            description: data.description,
            price: data.price,
            image: data.image,
            package: selectedOption,
            id: data.id + "-" + selectedOption,
            quantity: quantity
          })
        );
        navigate("/catalog");
      }}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        borderRadius: "10px",
        backgroundColor: "#D9BBAE",
        border: "none",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer"
      }}
    >
      Add to Cart
    </button>

</div>
    </div>
  );
};

export default ProductDetails;

