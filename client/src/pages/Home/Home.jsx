import React from "react";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <div>
      <div className="main-area">
        <h1 className="title-line">Welcome to PRS</h1>
        <SearchBox />
        <h2 className="site-info-title">Get the BEST results from...</h2>
        <div>
          <img
            className="Amazon-logo"
            src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
            alt="Amazon Logo"
          />
          <img
            src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
            alt="Flipkart Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
