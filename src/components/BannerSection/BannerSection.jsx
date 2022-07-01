import React from "react";
import "./BannerSectionCSS.css";

// Component
import Products from "../Products/Products";

const BannerSection = () => {
  return (
    <>
      <section className="banner">
        <div className="banner-container">
          <div className="banner-box-1">
            <h1> New </h1>
            <h2> Arrivals</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              iure libero qui explicabo vel inventore at! Accusamus,
              exercitationem nulla nemo dolorum deserunt, sunt perferendis
              inventore consequuntur quo voluptas assumenda quasi.
            </p>
            <button className="banner-box1-button">SHOP NOW</button>
          </div>
          <div className="banner-box-2"></div>
        </div>
      </section>

      {/* Product Sections */}
      <Products />
    </>
  );
};

export default BannerSection;
