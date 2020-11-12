import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import jwt_decode from "jwt-decode";
import Header from "../Header.js";
import axios from "axios";
import {getStudList} from "../../components/teacherFunctions";
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
  Dropdown

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
         <div>
                  <div>
                  <h3>{stud.name} {stud.surname} {stud.class}</h3>
                  </div>
                  <div >
                  <Button ></Button>
                  </div>
         </div>
                  
                  )) 
          }
        
     
      </div>

      
    );
  }
}
