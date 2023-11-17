import React from "react";
import SearchBox from "../components/SearchBox";
import ProductCard from "../components/ProductCard";


function Home(){

    let ProductElements = []
    const [ProductList, setProductList] = React.useState([]);
    function HandleSearch(e)
    {
        let data = {"searchKey": e.target.value}
        fetch(import.meta.env.VITE_BACKEND_URL, {
            method: "POST",
            body: JSON.stringify(data)
            }
        )
        .then((res) => res.json())
        .then((data) => {
            setProductList(data)
        })
    }

    ProductList.forEach((ProductData) => {
        ProductElements.push(<ProductCard 
            src={ProductData.img}
            price={ProductData.price}
            rating={ProductData.rating}
            title={ProductData.title}
            desc={ProductData.desc} />)
    })
  return (
      <div className="main-area">
          <h1 className="title-line">Welcome to PRS</h1>
          <SearchBox handleClick={HandleSearch}/>
          <div className="product-list">
            {ProductElements}
          </div>
      </div>
  );
};

export default Home;
