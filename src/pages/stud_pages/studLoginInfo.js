import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import jwt_decode from "jwt-decode";
import Header from "../Header.js";
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
import { decode } from "jsonwebtoken";
export default class studLoginInfo extends Component {

  constructor() {
    super();
    this.state = {
        name: "",
        surname: "",
        class: "",
        school: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      surname: decoded.surname,
      class: decoded.class,
      school: decoded.school,
    })};


    logOut(e) {
      e.preventDefault();
      localStorage.removeItem("usertoken");
      window.location.href = "/";
    }
  
  render() {
    return (
      <div>
       <Header/>
      <div class="btn2">
       <Button variant="primary" href="/studLoginInfo/changeUsername">
            Pakeisti slapyvardį
          </Button>

          <Button variant="primary" type="submit">
            Pakeisti slaptažodį
          </Button>

       </div>
      </div>
    );
  }
}
