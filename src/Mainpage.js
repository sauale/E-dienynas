import React, { Component } from "react";
import "./App.css";
import "./Mainpage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div class="Text">
          <h1>
            <strong>E-Dienynas</strong>
          </h1>
          <p>švietimo ir ugdymo įstaigų valdymo sistemą</p>
        </div>

        <div class="top-table">
          <h3>1 Punktas</h3>
          <p>test test test test test test test test test test testtest test</p>
        </div>

        <div class="bottom-table">
          <h3>2 Punktas</h3>
          <p>test testtesttesttesttesttest test test </p>
        </div>

        <div class="left-table">
          <h3>3 Punktas</h3>
          <p>
            test test test test test test test test test test testtest test{" "}
          </p>
        </div>

        <div class="right-table">
          <h3>4 Punktas</h3>
          <p>
            test test test test test test test test test test testtest test{" "}
          </p>
        </div>
      </div>
    );
  }
}
