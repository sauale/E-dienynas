import "./App.css";

import React, { Component } from "react";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

import {
  Link,
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
//PAGES
import Mainpage from "./pages/Mainpage.js";
import LoginPage from "./pages/LoginPage.js";
import S_LoginPage from "./pages/S_LoginPage.js";
import SendPasswordPagefrom from "./pages/SendPasswordPage.js";
import landingPage from "./pages/s_pages/landingPage.js";
import addStudentPage from "./pages/s_pages/addStudentPage.js";
import addTeacherPage from "./pages/s_pages/addTeacherPage.js";
import studLandingPage from "./pages/studLandingPage.js";
import teacherLandingPage from "./pages/teacherLandingPage.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/SendPassword" component={SendPasswordPagefrom} />
          <Route exact path="/S_Login" component={S_LoginPage} />
          <Route exact path="/S_landingPage" component={landingPage} />
          <Route exact path="/addStudentPage" component={addStudentPage} />
          <Route exact path="/addTeacherPage" component={addTeacherPage} />
          <Route exact path="/studLandingPage" component={studLandingPage} />
          <Route exact path="/teacherLandingPage" component={teacherLandingPage} />
        </Switch>
      </Router>
    );
  }
}
