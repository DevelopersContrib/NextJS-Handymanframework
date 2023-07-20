"use client";
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({bgNavbar}) => {
  return (
    <Navbar fixed="top" expand="lg" data-bs-theme="dark" className={`${bgNavbar}`}>
      <div className='container-fluid'>
          <Navbar.Brand href="#home">
              Javapoint.com
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                  <Link className='nav-link' href="#">Home</Link>
                  <Link className='nav-link' href="#">Contact Us</Link>
                  <Link className='nav-link' href="#">Referrals</Link>
                  <Link className='nav-link' href="#">Apps</Link>
                  <Link className='nav-link' href="#">Projects</Link>
              </Nav>
          </Navbar.Collapse>
      </div>
  </Navbar>
  )
}

export default Navigation