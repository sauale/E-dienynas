import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import axios from "axios";

import {DeleteStud} from "../../components/s_workerFunctions";
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
//import students from "../../../routes/Students";
export default class selectStud extends Component {

  constructor() {
    super();
    this.state = {
      students: [],

    };

    this.onChange = this.onChange.bind(this);


    this.onClick = this.onClick.bind(this);
  }

  onClick (Studid) {
    DeleteStud(Studid).then((res) => {
      alert("Ištrinta")
      window.location.reload();
    });
  }

  componentDidMount() {

    axios
      .get("http://localhost:5000/students")
      .then((response) => {
        const data = response.data;
        this.setState({ students: data });
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


          {this.state.students.map(student=> (
            <tr>
            <td >
              <h3>{student.name}</h3>
            </td>
            <td className="LeaderUser">
              <h3>{student.surname}</h3>
            </td>
            <td className="LeaderUser">
              <h3>{student.school}</h3>
            </td>
            <td className="LeaderUser">
              <h3>{student.class}</h3>
            </td>
            <td>
            <button type="button" class="btn btn-danger" onClick={() => this.onClick(student.id)}>Šalinti</button>
            </td>
          </tr>

          ))}
         </table>
      </div>

    );
  }
}
