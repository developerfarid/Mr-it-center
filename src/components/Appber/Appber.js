import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './Appber.css'

const Appber = () => {
  return (
    <>
      <Navbar className="fixed-top bg-light"  expand='lg'>
        <Container>
          <Link className=' logo text-decoration-none fs-2' to='/home'>
            MR IT
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto '>
              <NavLink className=' my-nav' to='/home'>
                Home
              </NavLink>
              <NavLink className=' my-nav' to='/about'>
                About
              </NavLink>
              <NavLink className=' my-nav' to='/service'>
                Service
              </NavLink>
              <NavLink className='my-nav' to='/contact'>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Appber;
