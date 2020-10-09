import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginPage.css";
import { login } from "../components/s_workerFunctions";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
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
      username: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    login(user).then((res) => {
      if (res) {
        this.props.history.push(`/S_landingPage`);
        window.location.reload();
      }
    });
  }

  render() {
    return (
      <div class="container">
        <Form onSubmit={this.onSubmit}>
          <h1>E-Dienynas</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="username"
              placeholder="Naudotojo vardas"
              className="user_input"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Slaptažodis"
              className="user_input"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Prisijungti
          </Button>
        </Form>
        <a href="/" className="FormField__Link">
          Atgal
        </a>
      </div>
    );
  }
}
