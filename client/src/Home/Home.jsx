import React from "react";
import SearchBox from "../components/SearchBox";
import ProductCard from "../components/ProductCard";

function Home(){

    let ProductElements = []
    const [ProductList, setProductList] = React.useState([]);
    React.useEffect(() =>{
        fetch("http://192.168.123.245:8000")
        .then((res) => res.json())
        .then((data) => {
            setProductList(data)
        })
    }, [0])

    ProductList.forEach((ProductData) => {
        console.log(ProductData)
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
          <SearchBox />
          <div className="product-list">
            {ProductElements}
          </div>
      </div>
  );
};

export default Home;
