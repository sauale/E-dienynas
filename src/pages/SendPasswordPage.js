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
          <h3>Slaptažodžio priminimas</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="username"
              placeholder="Jūsų el.paštas:"
              className="user_input"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Siųsti
          </Button>
        </Form>
        <a href="Login" className="FormField__Link">
          Atgal
        </a>
      </div>
    );
  }
}
