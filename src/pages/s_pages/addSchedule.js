import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/LoginPage.css";
import axios from "axios";

import {AddSchedule} from "../../components/s_workerFunctions";
import jwt_decode from "jwt-decode";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  InputGroup,
  DropdownButton,
  Dropdown,
  Row,
  Col, 
} from "react-bootstrap";
export default class addSchedule extends Component {

  constructor() {
    super();
    this.state = {
      teachers: [],
      classes: [],
      mondaySchedule: ["","","","","","","","",],
      tuesdaySchedule: ["","","","","","","","",],
      wednesdaySchedule: ["","","","","","","","",],
      thursdaySchedule: ["","","","","","","","",],
      fridaySchedule: ["","","","","","","","",],
      class: "",
      school: "",

    };

    this.onChange = this.onChange.bind(this);
    this.onChangeMonday = this.onChangeMonday.bind(this);
    this.onChangeTuesday = this.onChangeTuesday.bind(this);
    this.onChangeWednesday = this.onChangeWednesday.bind(this);
    this.onChangeThursday = this.onChangeThursday.bind(this);
    this.onChangeFriday = this.onChangeFriday.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();
    alert(this.state.mondaySchedule[0])
    const data = {
      class: this.state.class,
      school: this.state.school,
      monday:this.state.mondaySchedule,
      tuesday: this.state.tuesdaySchedule,
      wednesday:this.state.wednesdaySchedule,
      thursday: this.state.thursdaySchedule,
      friday: this.state.fridaySchedule
      
    };

    AddSchedule(data).then((res) => {
      if (res) {
        this.props.history.push(`/S_landingPage`);
        window.location.reload();
      }
      
        });
    }



    logOut(e) {
      e.preventDefault();
      localStorage.removeItem("usertoken");
      window.location.href = "/";
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    onChangeMonday(e){

          const mondaySchedule= [...this.state.mondaySchedule];
          mondaySchedule[e.target.id]=e.target.value;
  
         this.setState({
              mondaySchedule: mondaySchedule
         })
    }
    onChangeTuesday(e){

      const tuesdaySchedule= [...this.state.tuesdaySchedule];
      tuesdaySchedule[e.target.id]=e.target.value;

     this.setState({
      tuesdaySchedule: tuesdaySchedule
     })
    }
    onChangeWednesday(e){

      const wednesdaySchedule= [...this.state.wednesdaySchedule];
      wednesdaySchedule[e.target.id]=e.target.value;

     this.setState({
      wednesdaySchedule:  wednesdaySchedule
     })
    }
    onChangeThursday(e){

      const thursdaySchedule= [...this.state.thursdaySchedule];
      thursdaySchedule[e.target.id]=e.target.value;

     this.setState({
      thursdaySchedule: thursdaySchedule
     })
    }
    onChangeFriday(e){

      const fridaySchedule= [...this.state.fridaySchedule];
      fridaySchedule[e.target.id]=e.target.value;

     this.setState({
       fridaySchedule: fridaySchedule
     })
    }                  

   
    


    

  
  render() {
    return (
        <div>
        <Form onSubmit={this.onSubmit}>
          <div class="container" style={{margin: "50px auto"}}>
          <h2>Tvarkaraščio kūrimas</h2>
     

        
          <Form.Group >
            <Form.Control type="username" placeholder="Mokykla" name="school"  className="user_input" value={this.state.school} onChange={this.onChange} /> </Form.Group>

          <Form.Group >
            <Form.Control type="username" placeholder="Klasė"   name="class"  className="user_input"     value={this.state.class}     onChange={this.onChange}/></Form.Group>
            
    

           </div>


           <div style={{marginLeft:"5%",marginRight:"5%"}} >
            <div class="row">
                <div class="col-sm">
                <h3 style={{textAlign:"center"}}>Pirmadienis</h3>
                <Form.Group >
                     <Form.Control id="0" type="text" placeholder="1 pamoka"  name="mondaySchedule" className="user_input" value={this.state.mondaySchedule[0]} onChange={this.onChangeMonday} /> 
                     <Form.Control id="1" type="text" placeholder="2 pamoka"  name="mondaySchedule" className="user_input" value={this.state.mondaySchedule[1]} onChange={this.onChangeMonday} />
                     <Form.Control id="2" type="text" placeholder="3 pamoka"  name="mondaySchedule" className="user_input" value={this.state.mondaySchedule[2]} onChange={this.onChangeMonday} />
                     <Form.Control id="3" type="text" placeholder="4 pamoka"  name="mondaySchedule" className="user_input" value={this.state.mondaySchedule[3]} onChange={this.onChangeMonday} />
                     <Form.Control id="4" type="text" placeholder="5 pamoka"  name="mondaySchedule" className="user_input" value={this.state.mondaySchedule[4]} onChange={this.onChangeMonday} />
                     <Form.Control id="5" type="text" placeholder="6 pamoka"  name="mondaySchedule" className="user_input" value={this.state.mondaySchedule[5]} onChange={this.onChangeMonday} />
                     <Form.Control id="6" type="text" placeholder="7 pamoka"  name="mondaySchedule" className="user_input" value={this.state.mondaySchedule[6]} onChange={this.onChangeMonday} /> 
                     <Form.Control id="7" type="text" placeholder="8 pamoka"  name="mondaySchedule" className="user_input" value={this.state.mondaySchedule[7]} onChange={this.onChangeMonday} />     
          
                </Form.Group>
                </div>
                <div class="col-sm">
                <h3 style={{textAlign:"center"}}>Antradienis</h3>
                <Form.Group >
                     <Form.Control id="0"  type="text" placeholder="1 pamoka" name="tuesdaySchedule"  className="user_input" value={this.state.tuesdaySchedule[0]} onChange={this.onChangeTuesday} /> 
                     <Form.Control id="1"  type="text" placeholder="2 pamoka" name="tuesdaySchedule"  className="user_input" value={this.state.tuesdaySchedule[1]} onChange={this.onChangeTuesday} />
                     <Form.Control id="2"  type="text" placeholder="3 pamoka" name="tuesdaySchedule"  className="user_input" value={this.state.tuesdaySchedule[2]} onChange={this.onChangeTuesday} />
                     <Form.Control id="3"  type="text" placeholder="4 pamoka" name="tuesdaySchedule"  className="user_input" value={this.state.tuesdaySchedule[3]} onChange={this.onChangeTuesday} />
                     <Form.Control id="4"  type="text" placeholder="5 pamoka" name="tuesdaySchedule"  className="user_input" value={this.state.tuesdaySchedule[4]} onChange={this.onChangeTuesday} />
                     <Form.Control id="5"  type="text" placeholder="6 pamoka" name="tuesdaySchedule"  className="user_input" value={this.state.tuesdaySchedule[5]} onChange={this.onChangeTuesday} />
                     <Form.Control id="6"  type="text" placeholder="7 pamoka" name="tuesdaySchedule"  className="user_input" value={this.state.tuesdaySchedule[6]} onChange={this.onChangeTuesday} />
                     <Form.Control id="7"  type="text" placeholder="8 pamoka" name="tuesdaySchedule"  className="user_input" value={this.state.tuesdaySchedule[7]} onChange={this.onChangeTuesday} /> 
          
                </Form.Group>
                </div>
                <div class="col-sm">
                <h3 style={{textAlign:"center"}}>Trečiadienis</h3>
                <Form.Group >
                     <Form.Control id="0" type="text" placeholder="1 pamoka" name="wednesdaySchedule"  className="user_input" value={this.state.wednesdaySchedule[0]} onChange={this.onChangeWednesday} /> 
                     <Form.Control id="1" type="text" placeholder="2 pamoka" name="wednesdaySchedule"  className="user_input" value={this.state.wednesdaySchedule[1]} onChange={this.onChangeWednesday} /> 
                     <Form.Control id="2" type="text" placeholder="3 pamoka" name="wednesdaySchedule"  className="user_input" value={this.state.wednesdaySchedule[2]} onChange={this.onChangeWednesday} /> 
                     <Form.Control id="3" type="text" placeholder="4 pamoka" name="wednesdaySchedule"  className="user_input" value={this.state.wednesdaySchedule[3]} onChange={this.onChangeWednesday} /> 
                     <Form.Control id="4" type="text" placeholder="5 pamoka" name="wednesdaySchedule"  className="user_input" value={this.state.wednesdaySchedule[4]} onChange={this.onChangeWednesday} /> 
                     <Form.Control id="5" type="text" placeholder="6 pamoka" name="wednesdaySchedule"  className="user_input" value={this.state.wednesdaySchedule[5]} onChange={this.onChangeWednesday} /> 
                     <Form.Control id="6" type="text" placeholder="7 pamoka" name="wednesdaySchedule"  className="user_input" value={this.state.wednesdaySchedule[6]} onChange={this.onChangeWednesday} /> 
                     <Form.Control id="7" type="text" placeholder="8 pamoka" name="wednesdaySchedule"  className="user_input" value={this.state.wednesdaySchedule[7]} onChange={this.onChangeWednesday} /> 
                </Form.Group>
                </div>
                <div class="col-sm">
                <h3 style={{textAlign:"center"}}>Ketvirtadienis</h3>
                <Form.Group >
                     <Form.Control id="0" type="username" placeholder="1 pamoka" name="thursdaySchedule"  className="user_input" value={this.state.thursdaySchedule[0]} onChange={this.onChangeThursday} /> 
                     <Form.Control id="1" type="username" placeholder="2 pamoka" name="thursdaySchedule"  className="user_input" value={this.state.thursdaySchedule[1]} onChange={this.onChangeThursday} /> 
                     <Form.Control id="2" type="username" placeholder="3 pamoka" name="thursdaySchedule"  className="user_input" value={this.state.thursdaySchedule[2]} onChange={this.onChangeThursday} />
                     <Form.Control id="3" type="username" placeholder="4 pamoka" name="thursdaySchedule"  className="user_input" value={this.state.thursdaySchedule[3]} onChange={this.onChangeThursday} />
                     <Form.Control id="4" type="username" placeholder="5 pamoka" name="thursdaySchedule"  className="user_input" value={this.state.thursdaySchedule[4]} onChange={this.onChangeThursday} />
                     <Form.Control id="5" type="username" placeholder="6 pamoka" name="thursdaySchedule"  className="user_input" value={this.state.thursdaySchedule[5]} onChange={this.onChangeThursday} />
                     <Form.Control id="6" type="username" placeholder="7 pamoka" name="thursdaySchedule"  className="user_input" value={this.state.thursdaySchedule[6]} onChange={this.onChangeThursday} />
                     <Form.Control id="7" type="username" placeholder="8 pamoka" name="thursdaySchedule"  className="user_input" value={this.state.thursdaySchedule[7]} onChange={this.onChangeThursday} />
                </Form.Group>
                </div>
                <div class="col-sm">
                <h3 style={{textAlign:"center"}}>Penktadienis</h3>
                <Form.Group >
                     <Form.Control id="0" type="username" placeholder="1 pamoka" name="fridaySchedule"   className="user_input" value={this.state.fridaySchedule[0]} onChange={this.onChangeFriday} /> 
                     <Form.Control id="1" type="username" placeholder="2 pamoka" name="fridaySchedule"   className="user_input" value={this.state.fridaySchedule[1]} onChange={this.onChangeFriday} />
                     <Form.Control id="2" type="username" placeholder="3 pamoka" name="fridaySchedule"   className="user_input" value={this.state.fridaySchedule[2]} onChange={this.onChangeFriday} /> 
                     <Form.Control id="3" type="username" placeholder="4 pamoka" name="fridaySchedule"   className="user_input" value={this.state.fridaySchedule[3]} onChange={this.onChangeFriday} /> 
                     <Form.Control id="4" type="username" placeholder="5 pamoka" name="fridaySchedule"   className="user_input" value={this.state.fridaySchedule[4]} onChange={this.onChangeFriday} />  
                     <Form.Control id="5" type="username" placeholder="6 pamoka" name="fridaySchedule"   className="user_input" value={this.state.fridaySchedule[5]} onChange={this.onChangeFriday} /> 
                     <Form.Control id="6" type="username" placeholder="7 pamoka" name="fridaySchedule"   className="user_input" value={this.state.fridaySchedule[6]} onChange={this.onChangeFriday} /> 
                     <Form.Control id="7" type="username" placeholder="8 pamoka" name="fridaySchedule"   className="user_input" value={this.state.fridaySchedule[7]} onChange={this.onChangeFriday} /> 
          
                </Form.Group>
                </div>
            </div>

               
        </div>
            <Button style={{margin: "50px 740px"}} variant="primary" type="submit"> Įrašyti</Button>
                         
               





         {/*
         

          <div style={{marginLeft:"5%"}}>
           <h3 style={{display:"inline-block"}}>Pirmadienis</h3>
           <h3 style={{display:"inline-block",marginLeft: "140px"}}>Antradienis</h3>
           <h3 style={{display:"inline-block",marginLeft: "140px"}}>Trečiadienis</h3>
           <h3 style={{display:"inline-block",marginLeft: "140px"}}>Ketvirtadienis</h3>
           <h3 style={{display:"inline-block",marginLeft: "140px"}}>Penktadienis</h3>
          </div>

          <div style={{marginLeft:"5%"}}>
             <Form.Group >
                     <Form.Control type="username" placeholder="1 pamoka" name="username"  className="user_input" value={this.state.username} onChange={this.onChange} /> 
                     <Form.Control type="username" placeholder="1 pamoka" name="username"  className="user_input" value={this.state.username} onChange={this.onChange} /> 
          
          
          
            </Form.Group>
           </div>

          <
          */}
          </Form>

        </div>
     
    );
  }
}
