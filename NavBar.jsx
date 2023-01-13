import React from 'react'
import cart from '../Components/assets/cart.png'
import profile from '../Components/assets/profile.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand><Nav.Link href="/">UrMart</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            {/* <Link to='/'><Button variant="info">Home</Button>{' '}</Link>
            <Link to='/signup'><Button variant="info">Sign Up</Button>{' '}</Link>
            <Link to='/signin'><Button variant="info">Sign In</Button>{' '}</Link> */}

            <Nav.Link href="/cart">
              <span className="cart-icon-css">
                Cart
                {/* <img src={cart} alt="cartImg" /> */}
              </span>
            </Nav.Link>

            <Nav.Link href="/userprofile">
              <span className="profile-icon">
                Profile
                {/* <img src={profile} alt="profile-img" /> */}
              </span>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavBar