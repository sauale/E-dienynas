import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";

import {registerStud} from "../../components/s_workerFunctions";
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
      username: "",
      password: "",
      name: "",
      surname: "",
      id: "",
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
      username: decoded.username,
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
    
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
            id: this.state.id,
            class: this.state.class,
            school: this.state.school,
        };
    
        registerStud(newUser).then((res) => {
          this.props.history.push(`/S_landingPage`);
        });
      }

  
  render() {
    return (
        <div class="container">
        <Form onSubmit={this.onSubmit}>
          <h1>Prideti mokiny</h1>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="username"
              placeholder="prisijungimo vardas"
              name="username"
              className="user_input"
              value={this.state.username}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Slaptažodis"
              name="password"
              className="user_input"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Control
              type="name"
              placeholder="Vardas"
              name="name"
              className="user_input"
              value={this.state.name}
              onChange={this.onChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicSurname">
            <Form.Control
              type="name"
              placeholder="Pavarde"
              name="surname"
              className="user_input"
              value={this.state.surname}
              onChange={this.onChange}
            />
             </Form.Group>
            <Form.Group controlId="formBasicId">
            <Form.Control
              type="id"
              placeholder="asmens kodas"
              name="id"
              className="user_input"
              value={this.state.id}
              onChange={this.onChange}
            />
             </Form.Group>
            <Form.Group controlId="formBasicClass">
            <Form.Control
              type="class"
              placeholder="Klase"
              name="class"
              className="user_input"
              value={this.state.class}
              onChange={this.onChange}
            />
             </Form.Group>
            
            <Form.Group controlId="formBasicSchool">
            <Form.Control
              type="school"
              placeholder="Mokykla"
              name="school"
              className="user_input"
              value={this.state.school}
              onChange={this.onChange}
            />
             </Form.Group>


          <Button variant="primary" type="submit">
            Prideti
          </Button>
        </Form>
    
      
      </div>
    );
  }
}
