import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function ReactNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" >MaxComputers</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products" >Products</Nav.Link>
            <Nav.Link as={Link} to="/products/Motherboards" >Motherboards</Nav.Link>
            <Nav.Link as={Link} to="/products/CPU" >CPU</Nav.Link>
            <Nav.Link as={Link} to="/products/GPU" >GPU</Nav.Link>
            <Nav.Link as={Link} to="/products/RAM" >RAM</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReactNavbar;