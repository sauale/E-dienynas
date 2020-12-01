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
export default class TeachProfile extends Component {

  constructor() {
    super();
    this.state = {
        name: "",
        surname: "",
        classes: "",
        school: "",
        subject: ""

    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      surname: decoded.surname,
      classes: decoded.classes,
      school: decoded.school,
      subject: decoded.subject

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

       <div class="containerProfile">
        
       <Form>
           <Row>
           <Col>
           <Form.Group as={Row} controlId="formPlaintextEmail">
         <Form.Label column sm="2">
          Vardas
              </Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.name} />
             </Col>
           </Form.Group>
           </Col>
           <Col>
           <Form.Group as={Row} controlId="formPlaintextEmail">
         <Form.Label column sm="2">
          Pavardė
              </Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.surname} />
             </Col>
           </Form.Group>
           </Col>
          </Row>
        </Form>

       <Form>
           <Row>
             <Col>
             <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
               Adresas
              </Form.Label>
             <Col sm="10">
             <Form.Control  defaultValue="adresasExample" />
             </Col>
           </Form.Group>
             </Col>
             <Col>
             <Form.Group as={Row} controlId="formPlaintextEmail">
              <Form.Label column sm="2">
               Email
              </Form.Label>
             <Col sm="10">
             <Form.Control  defaultValue="emailExample" />
             </Col>
           </Form.Group>
             </Col>
            </Row>
        </Form>
        <Form>
           <Row>
           <Col>
           <Form.Group as={Row} controlId="formPlaintextEmail">
         <Form.Label column sm="2">
          Klasės
              </Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.classes} />
             </Col>
           </Form.Group>
           </Col>
           <Col>
           <Form.Group as={Row} controlId="formPlaintextEmail">
         <Form.Label column sm="2">
          Mokykla
              </Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.school} />
             </Col>
           </Form.Group>
           </Col>
          </Row>
        </Form>

        <Form>
           <Row>
           <Col>
           <Form.Group as={Row} controlId="formPlaintextEmail">
         <Form.Label column sm="2">
     Mokomas Dalykas
              </Form.Label>
             <Col sm="10">
             <Form.Control plaintext readOnly defaultValue={this.state.subject} />
             </Col>
           </Form.Group>
           </Col>
          </Row>
        </Form>


        <Button variant="primary" type="submit">
            Išsaugoti
          </Button>
    
        </div>


      </div>
    );
  }
}
