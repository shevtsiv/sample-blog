import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

function NavMenu(props) {
  return (
    <div>
      <Navbar className="border-bottom" bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="/">SampleBlog</Navbar.Brand>
          <Nav className="ml-auto">
            <Form inline>
              <Nav.Link style={{padding: '5px 5px 5px 5px'}} href="/about">About</Nav.Link>
              <Nav.Link style={{padding: '5px 5px 5px 5px'}} href="/donate">Donate</Nav.Link>
            </Form>
          </Nav>
      </Navbar>
      {props.children}
    </div>
  );
}

export default NavMenu;
