import React, { useState, useEffect } from "react";
import "./ProductsCSS.css";

import { Link } from "react-router-dom";

// Import AXIOS
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  //? Fetch Products
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="product-section">
      <div className="product-banner-title">
        <h2> All Products </h2>
      </div>
      <div className="product-container">
        {data.map((item) => (
          <>
            <div key={item.id} className="product-box">
              <img className="product-image" src={item.image} alt={item.name} />
              <div className="product-name">
                <p> {item.title} </p>
                <Link to={`/product/${item.id}`}>
                  <p style={{ paddingTop: "10px", cursor: "pointer" }}>
                    Shop now!
                  </p>
                </Link>
              </div>
            </div>
          </>
        ))}

        {/* <div className="product-box"></div>
        <div className="product-box"></div>
        <div className="product-box"></div> */}
      </div>
    </section>
  );
};

export default Products;
