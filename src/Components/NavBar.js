import { CartWidget } from './CartWidget/CartWidget.js';


export const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">MaxComputers</span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button  class="nav-link active" aria-current="page" href="#">Motherboards</button>
            </li>
            <li class="nav-item">
              <button  class="nav-link" href="#">CPU Processors</button>
            </li>
            <li class="nav-item">
              <button  class="nav-link" href="#">Graphics cards</button>
            </li>
            <li class="nav-item">
              <button  class="nav-link" href="#">Memories</button>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};