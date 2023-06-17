import React from "react";

const ItemCount = ({ amount, handleSub, handleAdd, handleAppend }) => {
  return (
    <div>
      <div className="itemcount">
        <button className="button" onClick={handleSub}>-</button>
        <p>{amount}</p>
        <button className="button" onClick={handleAdd}>+</button>
      </div>
      <button className="button" onClick={handleAppend}>
        Add to the cart.
      </button>
    </div>
  );
};

export default ItemCount;
