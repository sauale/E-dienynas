import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginPage.css";
import jwt_decode from "jwt-decode";
import Header from "./Header.js";
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
export default class Mainpage extends Component {

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
        <Header />

        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/teachProfile">Asmeniniai duomenys</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/studList">Mokinių peržiūra</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/addMarks">Pažymių įrašymas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/addHomework">Namų darbų uždavimas</Nav.Link>
            </Nav.Item>
            
          
            </Nav>
      

      </div>
    );
  }
}