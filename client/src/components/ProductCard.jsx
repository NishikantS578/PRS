import React from "react";
import data from "../data.js";

console.log(data[0].img);
export default function ProductCard(){
    return (
        <div className="product-card">
            <img src={data[0].img}/>
            <span> ${data[0].price}</span>
            <span className="rating"> {data[0].rating}</span>
            <h1> {data[0].name}</h1>
            <p>{data[0].desc}</p>
        </div>
    );
}
