import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Space">
      <Navbar className="Header" light expand="md">
        <NavbarBrand className="ml-5" href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
          
            <NavItem>
              <NavLink href="#">My Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Muhammad-Osama-Qureshi">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About Me</NavLink>
            </NavItem>
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;