import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import jwt_decode from "jwt-decode";
import Header from "../HeaderTeach.js";
import axios from "axios";
import {AddMark} from "../../components/teacherFunctions";
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
export default class studList extends Component {

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
        grade: ""

    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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

    onClick(clas){
            return axios
              .post("http://localhost:5000/students/", {
                clas: clas,
                school: this.state.school
              })
              .then((response) => {
                  const data = response.data;
                  this.setState({ students: data });
                
              })
              .catch((err) => {
                console.log(err);
              });

      
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

       <DropdownButton id="dropdown-menu-align-right" title="Pasirinkite klasę">
         
         {this.state.classes.map(clas =>(
             
              
             <Dropdown.Item onClick={() => this.onClick(clas)} eventKey="option-2">{clas}</Dropdown.Item>
             

         ))}
       </DropdownButton>

       {this.state.students.map(stud=>(
         <div class="inline-form">
                  <div class="text-container">
                    <h4>{stud.name} {stud.surname}</h4>
                  </div>

                <div class="input-container">
                    <Form.Control
                      type="name"
                      placeholder=""
                      className="user_input"
                      name="grade"
                      value={this.state.grade}
                      onChange={this.onChange}
                     />
                  </div>

                  <div class="button-container" >
                    <Button variant="primary" onClick={() => this.AddMark(stud)} >Įrašyti pažymį</Button>
                  </div>
       
         </div>
                  
                  )) 
          }
        
     
      </div>

      
    );
  }
}
