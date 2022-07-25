import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import sections from '../../data/sections.json'
import "./appNav.css"

function AppNav(props) {
  const [navItems, setNavItems] = useState(sections)

  return (
    <Navbar className="bar">
      <Navbar.Brand>
        <img src="https://www.codeplatoon.org/wp-content/uploads/2018/10/CP-logo-2018-abbrev-1.png" width="60" />
        Code Platoon News
      </Navbar.Brand>
      <Nav>
        <Nav.Link href={'/'}>Home</Nav.Link>
      {
        navItems.map((navItem, index) => {
          return (
            <Nav.Link key={index} href={`/#/sections/${navItem.value}`} onClick={() => console.log(navItem.value)}>
                { navItem.label }
            </Nav.Link>
          )
        })
      }
      </Nav>
    </Navbar>
  )
}

export default AppNav;

