import React, { useEffect, useState } from "react";
import "./ProductItemCSS.css";

// React Router DOM
import { useParams } from "react-router-dom";

// Loading Component
import Loading from "../Loading/Loading";

// CartState
import { useCartState } from "../../store/CartStore";
import { AiFillStar } from "react-icons/ai";

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
        <div className="loading-container">
          <h1 style={{ textAlign: "center", marginTop: "-400px" }}>
            No Item Found
          </h1>
        </div>
      ) : (
        <div className="product-item">
          <div className="product-box1">
            <img src={data?.image} alt={data.title} />
          </div>
          <div className="product-box2">
            <div className="product-category">
              <h3> Category:</h3>
              <p>{data?.category}</p>
            </div>
            <div className="product-price">
              <p> Price:</p>
              <h3>{data?.price}</h3>
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
                  if (isNaN(quantity)) {
                    setQuantity(1);
                    return addToCart(1, data);
                  }
                  addToCart(quantity, data);
                }}
                className="cart-button"
              >
                Add to Cart
              </button>
            </div>
            <div className="product-details">
              <h3> Details: </h3>
              <p>{data?.description}</p>
            </div>
            <div className="product-rating">
              <StarComponent num={data?.rating.rate.toFixed(0)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Start Component
const StarComponent = ({ num }) => {
  const stars = new Array(parseInt(num)).fill("");
  return (
    <>
      {stars.map((star) => (
        <AiFillStar style={{ paddingRight: "5px" }} color="#FFAE42" size={35} />
      ))}
    </>
  );
};

export default ProductItem;
