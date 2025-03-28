"use client";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  //handle login
  const handleLogin = () =>{

  }

  return (
    <Navbar expand="lg" className="bg-transparent">
      <Container>
        <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <Link className="nav-link" href="men">
              Men
            </Link>
            <Link className="nav-link" href="women">
              Women
            </Link>
            <Link className="nav-link" href="accesories">
              Accesories
            </Link>
            <Link className="nav-link" href="about">
              About
            </Link>
            <Link className="nav-link" href="contact">
              Contact
            </Link>
            <Link className="nav-link" href="blog">
              Blogs
            </Link>
          </Nav>
          <div className="d-flex gap-2 align-items-center">
            <Button className="px-3" onClick={()=>handleLogin()}>Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
