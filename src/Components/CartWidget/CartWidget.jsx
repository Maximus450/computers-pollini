import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = () => {
  const { amountOnCart } = useContext(CartContext);

  return (
    <div className="cartwidget">
      <Link className="menu-link" to="/cart">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="xl"
          style={{ color: "#0d5916" }}
        />
        <span className="number">{amountOnCart()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
