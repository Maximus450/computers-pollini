import ReactNavbar from './Components/Navbar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div>
      <BrowserRouter>
    
        <ReactNavbar />
    
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;