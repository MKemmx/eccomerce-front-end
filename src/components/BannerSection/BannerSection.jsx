import React from "react";
import "./BannerSectionCSS.css";

//! Framer Motion Carousel
import Carousel from "framer-motion-carousel";

// Component
import Products from "../Products/Products";

const BannerSection = () => {
  const bannerImages = [
    {
      id: 1,
      imageURL:
        "https://dlcdnwebimgs.asus.com/gain/F78EC8DD-89A3-493A-8DE2-A983CE846D2D/fwebp",
    },
    {
      id: 2,
      imageURL:
        "https://dlcdnwebimgs.asus.com/gain/51562E58-7CA5-4321-9075-F7385976D863",
    },
    {
      id: 3,
      imageURL:
        " https://dlcdnwebimgs.asus.com/gain/72C0EAA7-474E-4BCD-8B21-154FCD79B04C/fwebp",
    },
  ];

  return (
    <>
      <div className="main-banner">
        <Carousel interval={5000}>
          {bannerImages.map((item, i) => (
            <img key={i} src={item.imageURL} alt="" />
          ))}
        </Carousel>
      </div>

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
      <Products />
    </>
  );
};

export default BannerSection;
