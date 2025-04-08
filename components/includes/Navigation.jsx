"use client";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NewsTicker from "@/components/NewsTicker";

const Navigation = ({ domain, bgNavbar }) => {
  return (
    <>
    <NewsTicker />
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className={`${bgNavbar}`}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#home">{domain.charAt(0).toUpperCase() + domain.slice(1)}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              className="nav-link"
              href="/"
            >
              Home
            </Link>
            <Link
              className="nav-link"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="nav-link"
              href="/contact"
            >
              Contact Us
            </Link>
            <Link
              className="nav-link"
              href="/referral"
            >
              Referrals
            </Link>
            <Link
              className="nav-link"
              href="/apps"
            >
              Apps
            </Link>
            <Link
              className="nav-link"
              href="/project/post"
            >
              Projects
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
    </>    
  );
};

export default Navigation;
