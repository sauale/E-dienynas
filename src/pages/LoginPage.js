import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginPage.css";
import {login} from "../components/studFunctions";
import {loginTeacher} from "../components/teacherFunctions";
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
        this.props.history.push(`/studLandingPage`);
        window.location.reload();
      }
      else{
        loginTeacher(user).then((res) => {
          if (res) {
            this.props.history.push(`/teacherLandingPage`);
            window.location.reload();
          }
          else{
            window.alert("Neteisingas slaptazodis ar prisijungimo vardas");
          }
        });
      }
    });
  }
  render() {
    return (
      <div class="container" >
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
        <a href="SendPassword" className="FormField__Link">
          Slaptažodžio priminimas
        </a>

        <br></br>
        <a href="/S_Login" className="FormField__Link">
          Prisijungimas sistemos darbuotojui
        </a>
        <br></br>
        <a href="/" className="FormField__Link">
          Atgal
        </a>
      </div>
    );
  }
}
