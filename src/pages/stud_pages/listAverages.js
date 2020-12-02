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
export default class listAverages extends Component {

  constructor() {
    super();
    this.state = {
        name: "",
        surname: "",
        class: "",
        school: "",
        grades: [],
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;

    const decoded = jwt_decode(token);
    this.setState({
      name: decoded.name,
      id : decoded.id,
      surname: decoded.surname,
      class: decoded.class,
      school: decoded.school,
    })


    
    axios
    .post("http://localhost:5000/students/getMark")
    .then((response) => {
      const data = response.data;
      this.setState({ grades: data });
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


    displayAverages = (grades,subject) => {
        let max = 0;
        let counter = 0;
        const count = grades.filter(grade => grade.stud_id == this.state.id && grade.subject == subject).length;
    
        return grades.filter(grade => grade.stud_id == this.state.id && grade.subject == subject).map(filteredGrade => {
          
          max = filteredGrade.Mark+max;
          counter = counter + 1;
           if(counter ==count){
            return (
              <div>
                <h5 >{max/ counter}</h5>
              </div>
            );
          }
        });
      };





  
  render() {
    return (
      <div>
       <Header/>


       <table class="table table-bordered table-dark " style={{width : '20%'}}>

            <tr>
                <th>Dalykas</th>
                <th>Vidurkis</th>
            </tr>







           <tr>
               <td>
               <h5>Istorija</h5>
               </td>
                <td style={{color: 'red',}}>
                {this.displayAverages(this.state.grades,'Istorija')}
                </td>
           </tr>

            <tr>
               <td>
               <h5>Matematika</h5>
               </td>
                <td style={{color: 'red',}}>
                {this.displayAverages(this.state.grades,'Matematika')}
                </td>
            </tr> 
            <tr>
               <td>
               <h5>Biologija</h5>
               </td>
                <td style={{color: 'red',}}>
                {this.displayAverages(this.state.grades,'Biologija')}
                </td>
            </tr> 
            <tr>
               <td>
               <h5>Fizika</h5>
               </td>
                <td style={{color: 'red',}}>
                {this.displayAverages(this.state.grades,'Fizika')}
                </td>
            </tr> 
            <tr>
               <td>
               <h5>Chemija</h5>
               </td>
                <td style={{color: 'red',}}>
                {this.displayAverages(this.state.grades,'Chemija')}
                </td>
            </tr> 
            <tr>
               <td>
               <h5>Geografija</h5>
               </td>
                <td style={{color: 'red',}}>
                {this.displayAverages(this.state.grades,'Geografija')}
                </td>
            </tr> 
            <tr>
               <td>
               <h5>Anglų kalba</h5>
               </td>
                <td style={{color: 'red',}}>
                {this.displayAverages(this.state.grades,'Anglų kalba')}
                </td>
            </tr> 
            <tr>
               <td>
               <h5>Lietuvių kalba</h5>
               </td>
                <td style={{color: 'red',}}>
                {this.displayAverages(this.state.grades,'Lietuvių kalba')}
                </td>
            </tr> 


           


        </table>
    
      </div>

    

    );
  }
}
