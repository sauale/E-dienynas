import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginPage.css";

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
  render() {
    return (
      <div class="container">
        <Form>
          <h1>E-Dienynas</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="username"
              placeholder="Naudotojo vardas"
              className="user_input"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Slaptažodis"
              className="user_input"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Prisijungti
          </Button>
        </Form>
        <a href="SendPassword" className="FormField__Link">
          Slaptažodžio priminimas
        </a>
      </div>
    );
  }
}
