import React from "react";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../Components/CartContext";

const ItemDetail = ({ item }) => {
  const { cart, addToCart } = useContext(CartContext);
  console.log(cart);

  const [amount, setAmount] = useState(1);

  const handleSub = () => {
    amount > 1 && setAmount(amount - 1);
  };

  const handleAdd = () => {
    amount < item.stock && setAmount(amount + 1);
  };

  return (
    <div className="card" >
      <div>
        <img src={item.img} alt={item.name} />
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p>${item.price}</p>
          <ItemCount
            amount={amount}
            handleAdd={handleAdd}
            handleSub={handleSub}
            handleAppend={() => {
              addToCart(item, amount);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
