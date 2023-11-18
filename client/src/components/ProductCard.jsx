import React from "react";
import BuyButton from "./BuyButton.jsx"

export default function ProductCard(props){
    return (
        <div className="product-card" >
            <img src={props.src}/>
            <span className="price"> {props.price}</span>
            <span className="rating"> {props.rating}</span>
            <h1> {props.title}</h1>
            <p>{props.desc}</p>
            <BuyButton href={props.href}/>
        </div>
    );
}
