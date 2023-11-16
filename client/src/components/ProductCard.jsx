import React from "react";
import data from "../data.js";

export default function ProductCard(props){
    return (
        <div className="product-card">
            <img src={props.src}/>
            <span> {props.price}</span>
            <span className="rating"> {props.rating}</span>
            <h1> {props.title}</h1>
            <p>{props.desc}</p>
        </div>
    );
}
