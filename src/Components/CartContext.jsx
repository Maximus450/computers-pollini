import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const startingCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(startingCart);

  const addToCart = (item, amount) => {
    const addedItem = { ...item, amount };

    const newCart = [...cart];
    const onTheCart = newCart.find(
      (product) => product.id === addedItem.id
    );

    if (onTheCart) {
        onTheCart.amount += amount;
    } else {
        newCart.push(addedItem);
    }
    setCart(newCart);
  };

  const amountOnCart = () => {
    return cart.reduce((acc, prod) => acc + prod.amount, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price* prod.amount, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        amountOnCart,
        totalPrice,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
