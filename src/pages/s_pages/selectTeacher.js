import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import axios from "axios";

import {DeleteTeacher} from "../../components/s_workerFunctions";
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
      teachers: [],

    };

    this.onChange = this.onChange.bind(this);


    this.onClick = this.onClick.bind(this);
  }

  onClick (Teachid) {
    DeleteTeacher(Teachid).then((res) => {
      alert("Ištrinta")
    });
  }

  componentDidMount() {

    axios
      .get("http://localhost:5000/teachers")
      .then((response) => {
        const data = response.data;
        this.setState({ teachers: data });
      })
      .catch(() => {
        alert("ERROR");
      });
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

      displayResults = (teachers) => {
        return teachers.map((teacher) => {
            return (
          
                
             
                    <tr>
                      <td >
                        <h3>{teacher.name}</h3>
                      </td>
                      <td className="LeaderUser">
                        <h3>{teacher.surname}</h3>
                      </td>
                      <td className="LeaderUser">
                        <h3>{teacher.school}</h3>
                      </td>
                      <td className="LeaderUser">
                        <h3>{teacher.subject}</h3>
                      </td>
                    </tr>
            
                
          
            );
          
        });
      };

  
  render() {
    return (
        <div >
        <h1>Mokytojų sarašas</h1>


        <table style={{width : "70%"}} class="table table-striped">
          
        <tr>
             <th>Vardas</th>
             <th>Pavardė</th>
             <th>Mokykla</th>
             <th>Dalykas</th>
             <th></th>                 
          </tr>


          {this.state.teachers.map(teacher=> (
            <tr>
            <td >
              <h3>{teacher.name}</h3>
            </td>
            <td className="LeaderUser">
              <h3>{teacher.surname}</h3>
            </td>
            <td className="LeaderUser">
              <h3>{teacher.school}</h3>
            </td>
            <td className="LeaderUser">
              <h3>{teacher.subject}</h3>
            </td>
            <td>
            <button type="button" class="btn btn-danger" onClick={() => this.onClick(teacher.id)}>Šalinti</button>
            </td>
          </tr>

          ))}
         </table>
      </div>

    );
  }
}
