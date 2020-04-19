import * as React from "react";
import NavMenu from "../header/menu";
import Container from "react-bootstrap/Container";
import '../index.css';

export default class DonatePage extends React.Component {

  render() {
    return (
      <NavMenu>
        <Container className="container" style={{width: 900}}>
          {/*  TODO: Implement Donate page*/}
        </Container>
      </NavMenu>
    );
  }
}
