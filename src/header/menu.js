import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

function NavMenu(props) {
  return (
    <div>
      <Navbar className="border-bottom" bg="light" expand="lg"
              style={{zIndex: 999, width: '100%', position: 'fixed', top: 0}}>
        <Navbar.Brand href="/">SampleBlog</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form inline>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="donate">Donate</Nav.Link>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
    </div>
  );
}

export default NavMenu;
