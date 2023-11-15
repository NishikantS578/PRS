import React from "react";
import magnifyingGlass from "../assets/magnifying-glass.svg"

const SearchBox = () => {
  return (
    <form className="searchbox">
      <input
          id="search-input"
          className="searchBar"
          type="search"
          placeholder="Search your product..."
      />
      <label htmlFor="search-input" className="magnifying-glass">
          <img src={magnifyingGlass} height="25px" className="search-icon"></img>
      </label>
    </form>
  );
};

export default SearchBox;
