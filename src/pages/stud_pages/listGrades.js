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
export default class studProfile extends Component {

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



  
  render() {
    return (
      <div>
       <Header/>
    

        
        <table class="table table-bordered  table-striped  " >

            <tr>
                <th>Dalykas</th>
                <th>Pažymiai</th>
            </tr>


           <tr>
               <td>
               <h5>Istorija</h5>
               </td>
                <td style={{color: 'red'}}>
                    {this.state.grades.filter(grade => grade.stud_id == this.state.id && grade.subject == 'Istorija').map(filteredGrade => (
                            <h5 style={{display:'inline-block'}}>{filteredGrade.Mark},</h5> 
                            
                            
                        ))}
                </td>
           </tr>


           <tr>
               <td>
               <h5>Matematika</h5>
               </td>
                <td style={{color: 'red'}}>
                    {this.state.grades.filter(grade => grade.stud_id == this.state.id && grade.subject == 'Matematika').map(filteredGrade => (
                            <h5 style={{display:'inline-block'}}>{filteredGrade.Mark},</h5> 
                            
                            
                        ))}
                </td>
           </tr>


           <tr>
               <td>
               <h5>Fizika</h5>
               </td>
                <td style={{color: 'red'}}>
                    {this.state.grades.filter(grade => grade.stud_id == this.state.id && grade.subject == 'Fizika').map(filteredGrade => (
                            <h5 style={{display:'inline-block'}}>{filteredGrade.Mark},</h5> 
                            
                            
                        ))}
                </td>
           </tr>


           <tr>
               <td>
               <h5>Chemija</h5>
               </td>
                <td style={{color: 'red'}}>
                    {this.state.grades.filter(grade => grade.stud_id == this.state.id && grade.subject == 'Chemija').map(filteredGrade => (
                            <h5 style={{display:'inline-block'}}>{filteredGrade.Mark},</h5> 
                            
                            
                        ))}
                </td>
           </tr>

           <tr>
               <td>
               <h5>Biologija</h5>
               </td>
                <td style={{color: 'red'}}>
                    {this.state.grades.filter(grade => grade.stud_id == this.state.id && grade.subject == 'Biologija').map(filteredGrade => (
                            <h5 style={{display:'inline-block'}}>{filteredGrade.Mark},</h5> 
                            
                            
                        ))}
                </td>
           </tr>


           <tr>
               <td>
               <h5>Geografija</h5>
               </td>
                <td style={{color: 'red'}}>
                    {this.state.grades.filter(grade => grade.stud_id == this.state.id && grade.subject == 'Geografija').map(filteredGrade => (
                            <h5 style={{display:'inline-block'}}>{filteredGrade.Mark},</h5> 
                            
                            
                        ))}
                </td>
           </tr>

           <tr>
               <td>
               <h5>Anglų kalba</h5>
               </td>
                <td style={{color: 'red'}}>
                    {this.state.grades.filter(grade => grade.stud_id == this.state.id && grade.subject == 'Anglų kalba').map(filteredGrade => (
                            <h5 style={{display:'inline-block'}}>{filteredGrade.Mark},</h5> 
                            
                            
                        ))}
                </td>
           </tr>

           <tr>
               <td>
               <h5>Lietuvių kalba</h5>
               </td>
                <td style={{color: 'red'}}>
                    {this.state.grades.filter(grade => grade.stud_id == this.state.id && grade.subject == 'Lietuvių kalba').map(filteredGrade => (
                            <h5 style={{display:'inline-block'}}>{filteredGrade.Mark},</h5> 
                            
                            
                        ))}
                </td>
           </tr>



        </table>
    
      </div>
    );
  }
}
