import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainpage from "./Mainpage.js";
import React, { Component } from "react";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="white" expand="lg" className="Nav">
          <Navbar.Brand href="#home">E-Dienynas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Kontaktai</Nav.Link>
              <Nav.Link href="#link">DUK</Nav.Link>
            </Nav>
            <Button variant="primary" size="lg">
              Prisijungti
            </Button>
          </Navbar.Collapse>
        </Navbar>

        <Mainpage />
      </div>
    );
  }
}
