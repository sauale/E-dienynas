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
        </Switch>
      </Router>
    );
  }
}
