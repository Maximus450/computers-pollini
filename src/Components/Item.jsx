import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img} alt="Product" />
      <div>
        <h4>{product.name}</h4>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <Link className="button" to={`/item/${product.id}`}>See more</Link>
      </div>
    </div>
  );
};

export default Item;
