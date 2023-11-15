import React from "react";
import SearchBox from "../components/SearchBox";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
      <div className="main-area">
          <h1 className="title-line">Welcome to PRS</h1>
          <SearchBox />
          <div className="product-list">
              <ProductCard />
              <ProductCard />
          </div>
      </div>
  );
};

export default Home;
