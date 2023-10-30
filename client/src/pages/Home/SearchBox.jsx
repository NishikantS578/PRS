import React from "react";

const SearchBox = () => {
  return (
    <div className="searchbox">
      <input
        className="searchBar"
        type="text"
        placeholder="Search your product..."
      />
      <button className="searchButton">Search</button>
    </div>
  );
};

export default SearchBox;
