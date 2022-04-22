import React from 'react';
import './Product.css';

const Product = props => {

    return(
        <div className="Product">
            <h4>{props.index}</h4>
            <img className="ProductImage" src={props.imagesrc}></img>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <a href={props.link}>Click Here to Buy</a>
        </div>
    )
}

export default Product;