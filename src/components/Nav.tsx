"use client";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Menu = () => {
  const [showSearch, setShowSearch] = useState(false);

  //handle login
  const handleLogin = () =>{

  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
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
          </Nav>
          <div className="d-flex gap-2 align-items-center">
            {showSearch ? (
              <div className="d-flex align-items-center">
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  autoFocus
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowSearch(false)}
                  className="p-2"
                >
                  <i className="bi bi-x"></i>
                </Button>
              </div>
            ) : (
              <Button onClick={() => setShowSearch(true)}>
                <i className="bi bi-search"></i>
              </Button>
            )}
            <Button className="px-3" onClick={()=>handleLogin()}>Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
