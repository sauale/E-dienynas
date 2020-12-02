import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import jwt_decode from "jwt-decode";
import Header from "../Header.js";
import axios from "axios";
import {AddHomework} from "../../components/teacherFunctions";
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
  DropdownButton,
  Dropdown,
  Alert

} from "react-bootstrap";
import { decode } from "jsonwebtoken";
import { set } from "mongoose";
export default class addHomework extends Component {

  constructor() {
    super();
    this.state = {
        name: "",
        surname: "",
        classes: [],
        school: "",
        subject: "",
        claze: "",
        students:[],
        grade: "",
        dropdownTitle: "",
        date: "",
        uzd: "",


    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
        class: this.state.dropdownTitle,
        date: this.state.date,
        subject: this.state.subject,
        uzd: this.state.uzd,
        school: this.state.school
      };

      AddHomework(data).then((res) => {
        alert("ya")
      });


  }

  componentDidMount() {
   
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      surname: decoded.surname,
      classes: decoded.classes,
      school: decoded.school,
      subject: decoded.subject,
      dropdownTitle: 'Pasirinkti klasę'

    })};


    
    
    logOut(e) {
      e.preventDefault();
      localStorage.removeItem("usertoken");
      window.location.href = "/";
    }

    onClick(clas){
         
        this.setState({dropdownTitle: clas})
        

      
    }

    AddMark(stud){
        return axios
              .post("http://localhost:5000/teachers/addMark", {
                stud_id : stud.id,
                stud_grade : this.state.grade,
                stud_subject:  this.state.subject

                 
              })
              .then((response) => {
                  alert("Pažymys irašytas")

              })
              .catch((err) => {
                console.log(err);
              });


    }

  

  
  render() {
    return (
      <div>
       <Header/>
    <Form onSubmit={this.onSubmit}>
       <div style={{textAlign: 'center'}}>
        <h1>Pridėti namų darbą</h1>

        <div >

        <DropdownButton id="dropdown-menu-align-right" title={this.state.dropdownTitle}>
         
         {this.state.classes.map(clas =>(
             
              
             <Dropdown.Item onClick={() => this.onClick(clas)} eventKey="option-2">{clas}</Dropdown.Item>

             
             

         ))}
       </DropdownButton>
        <h4>Atlikti iki:</h4>
       <input type="date" id="start" name="date" value={this.state.date}  onChange={this.onChange}
       min="2020-01-01" max="2021-12-31"/>
       </div>
       <br/>


        
        <textarea placeholder="Pridėti užduotį" rows="4" cols="50" id="start" name="uzd" value={this.state.uzd}  onChange={this.onChange}/>
       
        <br/>
        <Button variant="primary" type="submit">
            Siųsti
          </Button>
      </div>
      </Form>
      </div>

      
    );
  }
}
