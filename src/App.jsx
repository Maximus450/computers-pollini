import ReactNavbar from "./Components/Navbar.jsx";
import ItemListContainer from "./Components/ItemListContainer.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Components/CartContext.jsx";
import Cart from "./Components/Cart.jsx";
import Checkout from "./Components/Checkout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <ReactNavbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
