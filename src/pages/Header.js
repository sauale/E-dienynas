import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginPage.css";
import jwt_decode from "jwt-decode";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
export default class Header extends Component {

  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);
    this.setState({
      username: decoded.username,
    })};


    logOut(e) {
      e.preventDefault();
      localStorage.removeItem("usertoken");
      window.location.href = "/";
    }
  
  render() {
    return (
      <div >
        <Navbar bg="white" expand="lg" className="Nav">
          <Navbar.Brand  class="brand_name">
            E-Dienynas
          </Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link href="/studLandingPage">Pradžia</Nav.Link>
              <Nav.Link href="#link">DUK</Nav.Link>
              <Nav.Link href="#link">Kontaktai</Nav.Link>
              <Nav.Link href="#link">Atsiliepimai</Nav.Link>
            </Nav>

          <Button variant="primary" size="lg" href="./" className="ml-auto" onClick={this.logOut.bind(this)} >
            Atsijungti 
            </Button>
        </Navbar>
      </div>
    );
  }
}
