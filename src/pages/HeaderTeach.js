import React, { Component,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/LoginPage.css";
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import jwt_decode from "jwt-decode";
import { SidebarData } from './SidebarDataTeacher';
import { IconContext } from 'react-icons';
import './css/Navbar.css';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
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



export default function Header() {

 
   function logOut(e) {
      e.preventDefault();
      localStorage.removeItem("usertoken");
      window.location.href = "/";
    }
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
      <div >
         <IconContext.Provider value={{ color: '#fff' }}></IconContext.Provider>

        <Navbar bg="white" expand="lg" className="Nav">
        <div className='navbar'>
          <Link to='#'>
          Meniu <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
          <Navbar.Brand  class="brand_name">
            E-Dienynas
          </Navbar.Brand>

          <Nav className="mr-auto">
              <Nav.Link href="/teacherLandingPage">Pradžia</Nav.Link>
              <Nav.Link href="#link">DUK</Nav.Link>
              <Nav.Link href="#link">Kontaktai</Nav.Link>
              <Nav.Link href="#link">Atsiliepimai</Nav.Link>
            </Nav>

          <Button variant="primary" size="sm" href="./" className="ml-auto" onClick={logOut} >
          <IoIcons.IoMdLogOut onClick={showSidebar} />
            Atsijungti 
            </Button>
        </Navbar>
      </div>
    );
  
}
