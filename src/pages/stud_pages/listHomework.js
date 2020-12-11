import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import jwt_decode from "jwt-decode";
import Header from "../Header.js";
import axios from "axios";

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
export default class listHomework extends Component {

  constructor() {
    super();
    this.state = {
        name: "",
        surname: "",
        class: "",
        school: "",
        grades: [],
        homework:[],
    };
    
  }

  componentDidMount() {
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      id : decoded.id,
      surname: decoded.surname,
      name: decoded.name,
      class: decoded.class,
      school: decoded.school,
    })
    axios
    .post("http://localhost:5000/students/getHomework")
    .then((response) => {
      const data = response.data;
      this.setState({ homework: data });
    })
    .catch(() => {
      alert("ERROR");
    });


    


    };


    logOut(e) {
      e.preventDefault();
      localStorage.removeItem("usertoken");
      window.location.href = "/";
    }






  
  render() {
    return (
      <div>
       <Header/>

       <h1>{this.state.class}</h1>
       {this.state.homework.filter(work => work.class == this.state.class &&  work.school == this.state.school ).map(work => (
                            <h5 style={{display:'inline-block'}}>{work.uzd},</h5> 
                            
                            
                        ))}

    
      </div>

    

    );
  }
}
