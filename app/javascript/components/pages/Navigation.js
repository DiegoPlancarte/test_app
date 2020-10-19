import React, { useState } from 'react';
import {Navbar, Nav, NavItem, NavLink, NavbarToggler, NavbarBrand, Collapse, Button } from 'reactstrap'
import Logo from 'images/logo.png'

const Navigation = (props) => {

  const [ navState, setNaveState ] = useState(false)

  const toggle = () => {
    setNaveState(!navState)
  }

  const { sign_in_route, signed_in, sign_out_route, new_user_registration_path} = props

  return ( 
    <React.Fragment>
    {signed_in &&
      <Navbar className="navbar navbar-expand-lg navbar-collapse-md navbar-dark bg-primary sticky-nav mb-4">
        <NavbarBrand href="/">
          <img 
            id="imageSrc" 
            src={Logo} 
            className="img-fluid" 
            width="40"
            height="40"
            alt="Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={navState} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag="a" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="a" href="/profile">My Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="a" href="/">Create Vendor</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="a" href="/">Account</NavLink>
            </NavItem>
          </Nav>
            <Button className="btn bg-white text-secondary" href={sign_out_route}><strong>Sign Out</strong></Button>
        </Collapse>
      </Navbar>
    }
    {!signed_in &&
      <Navbar className="navbar navbar-expand-lg navbar-collapse-md navbar-dark bg-primary mb-4">
        <NavbarBrand href="/">
          <img 
            id="imageSrc" 
            src={Logo} 
            className="img-fluid" 
            width="40"
            height="40"
            alt="Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={navState} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          </Nav>
          <Button className="btn bg-white text-secondary" href={new_user_registration_path}><strong>Sign Up</strong></Button> &nbsp;
          <Button className="btn bg-white text-secondary" href={sign_in_route}><strong>Sign In</strong></Button>
        </Collapse>
      </Navbar>
    }
  </React.Fragment>
  );
}

export default Navigation;