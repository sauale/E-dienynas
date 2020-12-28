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
        remarks:[],
        option: "pasirinkimas",
    };
    this.onClick = this.onClick.bind(this);
    this.onClick2 = this.onClick2.bind(this);
  }
  onClick () {
    this.setState({
        test: "pagyrimas",
      });
  }
  onClick2 () {
    this.setState({
        test: "pastaba",
      });
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
    .post("http://localhost:5000/students/getRemarks")
    .then((response) => {
      const data = response.data;
      this.setState({ remarks: data });
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


    
    selectType(){

        if(this.state.test=="pagyrimas"){
            return (
                <div>
                    <table class="table table-bordered  table-striped  " style={{width : '50%'}}>

                        <tr>
                            <th>Dalykas</th>
                            <th>Pagyrimas</th>
                        </tr>

                        {this.state.remarks.filter(remark => remark.stud_id == this.state.id && remark.type == "Pagyrimas").map(remark => (

                        <tr>
                        <td>
                        <h6>{remark.subject}</h6>
                        </td>
                        <td>                   
                        <h6>{remark.remark}</h6>
                        </td>

                        </tr>
                          ))}                 


                        </table>
                </div>
              );
        }
        if(this.state.test=="pastaba"){
            return(
                <div>
                 <table class="table table-bordered  table-striped  " style={{width : '50%'}}>

                        <tr>
                            <th>Dalykas</th>
                            <th>Pastaba</th>
                        </tr>

                        {this.state.remarks.filter(remark => remark.stud_id == this.state.id && remark.type == "Pastaba").map(remark => (

                        <tr>

                        <td>
                        <h6>{remark.subject}</h6>
                        </td>
                        <td>                   
                        <h6>{remark.remark}</h6>
                        </td>

                        </tr>
                        ))}                 


                  </table>
                </div>
            )
        }
    }



  
  render() {
    return (

      <div>
       <Header/>

    

       <button type="button" class="btn btn-success" onClick={this.onClick}>Pagyrimai</button>
       
       <button type="button" class="btn btn-danger" onClick={this.onClick2}>Pastabos</button>


       {this.selectType()}
      </div>

      

    );
  }
}
