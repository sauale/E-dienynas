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
import SendPasswordPagefrom from "./pages/SendPasswordPage.js";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/SendPassword" component={SendPasswordPagefrom} />
        </Switch>
      </Router>
    );
  }
}
