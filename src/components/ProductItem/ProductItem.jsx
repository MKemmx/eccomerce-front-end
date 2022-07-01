import React, { useEffect, useState } from "react";
import "./ProductItemCSS.css";

// React Router DOM
import { useParams } from "react-router-dom";

// Loading Component
import Loading from "../Loading/Loading";

// CartState
import { useCartState } from "../../store/CartStore";

// AXIOS
import axios from "axios";

const ProductItem = () => {
  let { id } = useParams();
  // Global Cart State
  const { addToCart } = useCartState((state) => state);
  // Item Quantity
  const [quantity, setQuantity] = useState(1);
  //   Main State
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch Specific Item
  const fetchProductItem = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductItem();
  }, []);

  //! Check if item still loading
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {data === null ? (
        <>
          <h1> No Item Found </h1>
        </>
      ) : (
        <div className="product-item">
          <img className="product-box1" src={data?.image} alt={data.title} />
          <div className="product-box2">
            <div className="product-category">
              <p> Category:</p>
              <p>{data?.category}</p>
            </div>
            <div className="product-price">
              <p> Price:</p>
              <p>{data?.price}</p>
            </div>

            <div className="product-input-container">
              <input
                className="product-input"
                type="number"
                value={quantity}
                onChange={(event) => {
                  if (parseInt(event.target.value) <= 0) return setQuantity(1);
                  setQuantity(parseInt(event.target.value));
                }}
              />
              <button
                onClick={() => {
                  addToCart(quantity, data);
                }}
                className="cart-button"
              >
                Add to Cart
              </button>
            </div>
            <div className="product-details">
              <p> Details: </p>
              <p>{data?.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
