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
import studProfile from "./pages/stud_pages/studProfile.js";
import selectTeacher from "./pages/s_pages/selectTeacher.js";
import studLoginInfo from "./pages/stud_pages/studLoginInfo.js";
import changeUsername from "./pages/stud_pages/changeUsername.js";
import teachProfile from "./pages/teach_pages/teachProfile.js";
import studList from "./pages/teach_pages/studList.js";
import addMarks from "./pages/teach_pages/addMarks.js";
import listGrades from "./pages/stud_pages/listGrades.js";
import listAverages from "./pages/stud_pages/listAverages.js";
import addHomework from "./pages/teach_pages/addHomework.js";
import listHomework from "./pages/stud_pages/listHomework.js";
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
          <Route exact path="/studProfile" component={studProfile} />
          <Route exact path="/selectTeacher" component={selectTeacher} />
          <Route exact path="/studLoginInfo" component={studLoginInfo} />
          <Route exact path="/studLoginInfo/changeUsername" component={changeUsername} />
          <Route exact path="/teachProfile" component={teachProfile} />
          <Route exact path="/studList" component={studList} />
          <Route exact path="/addMarks" component={addMarks} />
          <Route exact path="/listGrades" component={listGrades} />
          <Route exact path="/listAverages" component={listAverages} />
          <Route exact path="/addHomework" component={addHomework } />
          <Route exact path="/listHomework" component={listHomework } />
          
        </Switch>
      </Router>
    );
  }
}
