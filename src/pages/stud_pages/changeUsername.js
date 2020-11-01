import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import jwt_decode from "jwt-decode";
import Header from "../Header.js";
import {change_Username} from "../../components/studFunctions.js"
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
export default class changeUsername extends Component {

  constructor() {
    super();
    this.state = {
        name: "",
        new_username:"",
        surname: "",
        class: "",
        school: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      onSubmit(e) {
        e.preventDefault();
        const user = {
          username: this.state.new_username,
          password: this.state.password,
        };
        change_Username(user).then((res) =>{
            if (res) {
                this.props.history.push(`/`);
                window.location.reload();
              }
        })

      }
  
  render() {
    return (
      <div>
       <Header/>
       <div class="container">
        <Form onSubmit={this.onSubmit}>
          <h2>Naudotojo vardo keitimas</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="username"
              placeholder="Naujas naudotojo vardas"
              className="user_input"
              name="new_username"
              value={this.state.new_username}
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
            Patvirtinti
          </Button>
        </Form>
      </div>
       


      </div>
    );
  }
}
