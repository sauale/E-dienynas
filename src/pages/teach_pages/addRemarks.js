import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import jwt_decode from "jwt-decode";
import Header from "../HeaderTeach.js";
import axios from "axios";
import {AddRemark} from "../../components/teacherFunctions";
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
export default class addRemarks extends Component {

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
        studname: "Pasirinkti mokinį",
        stud_id: "",
        remark: "",
        option: ""


    };
    this.onChange = this.onChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onValueChange(e) {
    this.setState({
      option: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
        id: this.state.stud_id,
        remark: this.state.remark,
        type: this.state.option,
        subject: this.state.subject
      };

      AddRemark(data).then((res) => {
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
      dropdownTitle: 'Pasirinkti klasę',

    })};


    
    
    logOut(e) {
      e.preventDefault();
      localStorage.removeItem("usertoken");
      window.location.href = "/";
    }

    onClick(clas){
         
        this.setState({dropdownTitle: clas})

        return axios
              .post("http://localhost:5000/students/", {
                clas: this.state.dropdownTitle,
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
    onClickStud(name,id){
         
        this.setState({studname: name })
        this.setState({stud_id: id  })
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
        <h1>Pridėti pagyrimą/pastabą</h1>

        <div >

        <DropdownButton  id="dropdown-menu-align-right "title={this.state.dropdownTitle}>
         
         {this.state.classes.map(clas =>(
             
              
             <Dropdown.Item onClick={() => this.onClick(clas)} eventKey="option-2">{clas}</Dropdown.Item>

             
             

         ))}
       </DropdownButton>

        <br></br>
       <DropdownButton id="dropdown-menu-align-right" title={this.state.studname} >
         
         {this.state.students.map(stud =>(
             
              
             <Dropdown.Item onClick={() => this.onClickStud(stud.name,stud.id)} eventKey="option-2">{stud.name}  { stud.surname}</Dropdown.Item>

             
             

         ))}
       </DropdownButton>
   
       </div>
       <br/>
     <div>
       <div className="radio-inline"  >
          <label>
            <input
              type="radio"
              value="Pagyrimas"
              checked={this.state.option === "Pagyrimas"}
              onChange={this.onValueChange}
            />
            Pagyrimas
          </label>
       </div>
       <div className="radio-inline">
          <label>
            <input
              type="radio"
              value="Pastaba"
              checked={this.state.option === "Pastaba"}
              onChange={this.onValueChange}
            />
            Pastaba
          </label>
       </div>    
    </div>
        <textarea placeholder="Pridėti pastabą/pagyrimą" rows="4" cols="50" id="start" name="remark" value={this.state.remark}  onChange={this.onChange}/>


       
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
