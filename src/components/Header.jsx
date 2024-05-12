import { faRightToBracket } from '@fortawesome/free-solid-svg-icons/faRightToBracket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className='shadow'>
      <Container>
        <Navbar.Brand href="#home" className='ms-5 navbar'><img src="https://cdn-icons-png.flaticon.com/512/196/196362.png" alt="" width={'60px'} height={'60px'} className='me-2'/><b>Bookland</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto ms-5">
            <Nav.Link href="#Shop" className='ms-5'>Shop</Nav.Link>
            <Nav.Link href="#Authors" className='ms-5'>Authors</Nav.Link>
            <Nav.Link href="#Categories" className='ms-5'>Categories</Nav.Link>
            </Nav>
            
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            <button className='btn ms-3' style={{color: "#FFFFFF", background:'black'}}>Sign Up <FontAwesomeIcon icon={faRightToBracket} style={{color: "#FFFFFF", background:'black'}} /></button>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header