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
        <h2>Student Landing Page</h2>
        
        <Button onClick={this.logOut.bind(this)} className="btn-landing">
            Atsijungti
          </Button>
      </div>
    );
  }
}
