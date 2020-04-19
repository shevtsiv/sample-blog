import * as React from "react";
import NavMenu from "../header/menu";
import Container from "react-bootstrap/Container";
import '../index.css';
import marked from 'marked';

export default class AboutPage extends React.Component {

  state = {
    markedContent: ""
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + '/about')
      .then(res => res.json())
      .then(data => {
        this.setState({markedContent: marked(data.content)})
      })
      .catch(console.error)
  }

  render() {
    return (
      <NavMenu>
        <Container style={{marginTop: '80px'}}>
          <div dangerouslySetInnerHTML={{__html: this.state.markedContent}}/>
        </Container>
      </NavMenu>
    );
  }
}
