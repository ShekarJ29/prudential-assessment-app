import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MenuComponent.css'

function MenuComponent() {
  return (
    <div className='navbar-nav-div'>
      <Navbar bg="dark" data-bs-theme="dark">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#registration">Registration</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
      </Navbar>
      </div>
  );
}

export default MenuComponent;
