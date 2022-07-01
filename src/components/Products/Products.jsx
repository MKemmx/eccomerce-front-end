import React, { useState, useEffect } from "react";
import "./ProductsCSS.css";

import { Link, useNavigate } from "react-router-dom";

// Import AXIOS
import axios from "axios";
import Loading from "../Loading/Loading";

const Products = () => {
  let navigate = useNavigate();

  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="product-section">
      <div className="product-banner-title">
        <div className="title">
          <h2> All Products </h2>
        </div>
        <div className="category-selector-container">
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
            className="category-selector"
          >
            {categories.map((category) => (
              <option lassName="category-option" value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="product-container">
        {selectedCategory === "all" ? (
          <>
            {data.map((item) => (
              <div
                onClick={() => {
                  navigate(`/product/${item.id}`);
                }}
                key={item.id}
                className="product-box"
              >
                <img
                  className="product-image"
                  src={item.image}
                  alt={item.name}
                />
                <div className="product-name">
                  <h3 className="product-category">{item.category}</h3>
                  <p className="product-title"> {item.title} </p>
                  <Link to={`/product/${item.id}`}>
                    <p className="view-btn">View More!</p>
                  </Link>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {data
              .filter((product) => product.category === selectedCategory)
              .map((item) => (
                <div
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                  }}
                  key={item.id}
                  className="product-box"
                >
                  <img
                    className="product-image"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="product-name">
                    <h3 className="product-category">{item.category}</h3>
                    <p className="product-title"> {item.title} </p>
                    <Link to={`/product/${item.id}`}>
                      <p className="view-btn">View More!</p>
                    </Link>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Products;
