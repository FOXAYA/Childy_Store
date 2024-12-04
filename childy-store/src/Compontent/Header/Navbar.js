import React, { Component } from "react";
import logo from '../../imgs/logo.webp';
import { SlBasket } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Nbar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="Logo_Image" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Pages</Nav.Link>
              <Nav.Link href="#link">Blogs</Nav.Link>
              <Nav.Link href="#link">Shops</Nav.Link>
              <Nav.Link href="#link">contact us</Nav.Link>
                          <div>
              <SlBasket />
              <CiSearch />
              <CgMenuGridO />

                          </div>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
);    }

}
export default Nbar;
