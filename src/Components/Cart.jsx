import React, { useContext } from "react";
import { CartContext } from "../Components/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, emptyCart } = useContext(CartContext);

  const handleEmpty = () => {
    emptyCart();
  };

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.map((prod) => (
        <div className="cart" key={prod.id}>
          <br />
          <h5>{prod.name}</h5>
          <p>Unit price: ${prod.price}</p>
          <p>Total price: ${prod.price * prod.amount}</p>
          <p>Amount: {prod.amount}</p>
          <br />
        </div>
      ))}

      {cart.length > 0 ? (
        <>
          <h2>Total price: ${totalPrice()}</h2>
          <button className="button" onClick={handleEmpty}>Empty</button>
          <Link to="/Checkout">
            <button className="button" type="button">Purchase</button>
          </Link>
        </>
      ) : (
        <h2>The cart is empty</h2>
      )}
    </div>
  );
};

export default Cart;
