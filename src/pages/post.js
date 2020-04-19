import * as React from "react";
import NavMenu from "../header/menu";
import Container from "react-bootstrap/Container";
import '../index.css';
import marked from 'marked';

export default class PostPage extends React.Component {

  state = {
    title: "",
    imageURL: "",
    markedContent: "",
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + '/posts/' + this.props.match.params.id)
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            title: data.title,
            imageURL: data.imageURL,
            markedContent: marked(data.content),
          }
        );
      })
      .catch(console.error);
  }

  render() {
    return (
      <NavMenu>
        <div className="post-headline">
          <div className="post-image"
               style={{backgroundImage: "url(" + this.state.imageURL + ")"}}>
            <img src={this.state.imageURL} alt="" className="the-cover"/>
          </div>
          <div className="post-info">
            <div className="post-content-title">{this.state.title}</div>
          </div>
        </div>
        {/* TODO: Move these styles to .css file */}
        <Container style={{
          width: 'auto',
          maxWidth: 900,
          position: 'relative',
          fontFamily: 'Merriweather, Georgia, Times, serif',
          fontStyle: 'normal',
          fontSize: '20px',
          fontWeight: 450,
          display: 'block'
        }}>
          <div className="post-content">
            <div dangerouslySetInnerHTML={{__html: this.state.markedContent}}/>
          </div>

        </Container>
      </NavMenu>
    );
  }
}