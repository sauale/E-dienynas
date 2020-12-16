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
       <Header/>

        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/studProfile">Asmeniniai duomenys</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/listGrades">Pažymiai</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/home">Lankomumas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/listAverages">Vidurkiai</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/viewSchedule">Tvarkaraštis</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/listRemarks">Pastabos ir pagyrimai</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/listHomework">Namų darbai</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/studLoginInfo">Prisijungimo duomenys</Nav.Link>
            </Nav.Item>
          
            </Nav>
      
      </div>
    );
  }
}
