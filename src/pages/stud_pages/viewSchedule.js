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
export default class viewSchedule extends Component {

  constructor() {
    super();
    this.state = {
        name: "",
        surname: "",
        class: "",
        school: "",
        schedule :[],
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
    .post("http://localhost:5000/students/getSchedule")
    .then((response) => {
      const data = response.data;
      this.setState({ schedule: data });
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
    
       {this.state.schedule.filter(sched => sched.class == this.state.class && sched.school == this.state.school).map(sched=> (



                           <div style={{textAlign:"center"}}>

                             <h2>Tvarkaraštis</h2>
                           <table class="table table-striped">

                           <tr>
                               <th>Nr</th>
                               <th>Pirmadienis</th>
                               <th>Antradienis</th>
                               <th>Trečiadienis</th>
                               <th>Ketvirtadienis</th>
                               <th>Penktadienis</th>
                               <th>Pamokų Laikas</th>
                           </tr>

                           <tr>
                               <td>1</td>
                               <td>{sched.monday[0]}</td>
                               <td>{sched.tuesday[0]}</td>
                               <td>{sched.wednesday[0]}</td>
                               <td>{sched.thursday[0]}</td>
                               <td>{sched.friday[0]}</td>
                               <td>8:00-8:45</td>
                           </tr>
                           <tr>
                               <td>2</td>
                               <td>{sched.monday[1]}</td>
                               <td>{sched.tuesday[1]}</td>
                               <td>{sched.wednesday[1]}</td>
                               <td>{sched.thursday[1]}</td>
                               <td>{sched.friday[1]}</td>
                               <td>8:55-9:40</td>
                           </tr>
                           <tr>
                               <td>3</td>
                               <td>{sched.monday[2]}</td>
                               <td>{sched.tuesday[2]}</td>
                               <td>{sched.wednesday[2]}</td>
                               <td>{sched.thursday[2]}</td>
                               <td>{sched.friday[2]}</td>
                               <td>9:50-10:30</td>
                           </tr>
                           <tr>
                               <td>4</td>
                               <td>{sched.monday[3]}</td>
                               <td>{sched.tuesday[3]}</td>
                               <td>{sched.wednesday[3]}</td>
                               <td>{sched.thursday[3]}</td>
                               <td>{sched.friday[3]}</td>
                               <td>10:45-11:30</td>
                           </tr>
                           <tr>
                               <td>5</td>
                               <td>{sched.monday[4]}</td>
                               <td>{sched.tuesday[4]}</td>
                               <td>{sched.wednesday[4]}</td>
                               <td>{sched.thursday[4]}</td>
                               <td>{sched.friday[4]}</td>
                               <td>12:00-12:45</td>
                           </tr>
                           <tr>
                               <td>6</td>
                               <td>{sched.monday[5]}</td>
                               <td>{sched.tuesday[5]}</td>
                               <td>{sched.wednesday[5]}</td>
                               <td>{sched.thursday[5]}</td>
                               <td>{sched.friday[5]}</td>
                               <td>12:55-13:40</td>
                           </tr>
                           <tr>
                               <td>7</td>
                               <td>{sched.monday[6]}</td>
                               <td>{sched.tuesday[6]}</td>
                               <td>{sched.wednesday[6]}</td>
                               <td>{sched.thursday[6]}</td>
                               <td>{sched.friday[6]}</td>
                               <td>13:50-14:35</td>
                           </tr>
                           <tr>
                               <td>8</td>
                               <td>{sched.monday[7]}</td>
                               <td>{sched.tuesday[7]}</td>
                               <td>{sched.wednesday[7]}</td>
                               <td>{sched.thursday[7]}</td>
                               <td>{sched.friday[7]}</td>
                               <td>14:45-15:30</td>
                           </tr>


                           
                         </table>
                         
                         </div>
                     ))}
                  
                    

                          
      </div>

      

    );
  }
}
