import React, { Component } from "react";
import "./css/Mainpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
export default class Mainpage extends Component {
  render() {
    return (
      <div>
        <Navbar bg="white" expand="lg" className="Nav">
          <Navbar.Brand href="#home" class="brand_name">
            E-Dienynas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Kontaktai</Nav.Link>
              <Nav.Link href="#link">DUK</Nav.Link>
            </Nav>
            <Button variant="primary" size="lg" href="./Login">
              Prisijungti
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <div class="Text">
          <h1>
            <strong>E-Dienynas</strong>
          </h1>
          <p>švietimo ir ugdymo įstaigų valdymo sistemą</p>
        </div>

        <div class="top-table">
          <h3>1 Punktas</h3>
          <p>test test test test test test test test test test testtest test</p>
        </div>

        <div class="bottom-table">
          <h3>2 Punktas</h3>
          <p>test testtesttesttesttesttest test test </p>
        </div>

        <div class="left-table">
          <h3>3 Punktas</h3>
          <p>
            test test test test test test test test test test testtest test{" "}
          </p>
        </div>

        <div class="right-table">
          <h3>4 Punktas</h3>
          <p>
            test test test test test test test test test test testtest test{" "}
          </p>
        </div>
      </div>
    );
  }
}
