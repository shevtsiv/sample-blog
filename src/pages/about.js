import * as React from "react";
import NavMenu from "../header/menu";
import Container from "react-bootstrap/Container";
import '../index.css';

export default class AboutPage extends React.Component {

  render() {
    return (
      <NavMenu>
        <Container className="container" style={{maxWidth: 900}}>
          {/*  TODO: Implement About page */}
        </Container>
      </NavMenu>
    );
  }
}
