import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import axios from "axios";

import {registerTeacher} from "../../components/s_workerFunctions";
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
    this.onSubmit = this.onSubmit.bind(this);
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

      onSubmit(e) {
        e.preventDefault();
    
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            surname: this.state.surname,
            id: this.state.id,
            subject: this.state.subject,
            school: this.state.school,
        };
    
        registerTeacher(newUser).then((res) => {
          this.props.history.push(`/S_landingPage`);
        });
      }

      displayResults = (teachers) => {
        return teachers.map((teacher) => {
            return (
              <div>
                <table>
                  <tbody>
                    <a href="/" onClick=""><tr>
                      <td className="LeaderUser">
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
                    </tr></a>
                  </tbody>
                </table>
              </div>
            );
          
        });
      };

  
  render() {
    return (
        <div >
        <h1>Mokytojų sarašas</h1>


        <table className="ProfileTable">
          <tr>
            <td className="LeaderUser1">{this.displayResults(this.state.teachers)}</td>
          </tr>          
        </table>  
      </div>

    );
  }
}
