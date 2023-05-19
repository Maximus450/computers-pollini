import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cartwidget">
      <FontAwesomeIcon icon={faCartShopping} size="xl" style={{color: "#0d5916",}} />
      <div className="quantity">3</div>
    </div>
  );
};

export default CartWidget