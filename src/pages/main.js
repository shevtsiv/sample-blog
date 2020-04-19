import * as React from "react";
import NavMenu from "../header/menu";
import Container from "react-bootstrap/Container";
import '../index.css';

export default class MainPage extends React.Component {

  state = {
    posts: []
  };

  componentDidMount() {
    fetch(process.env.REACT_APP_BACKEND_URL + '/posts/')
      .then(res => res.json())
      .then(data => {
        this.setState({posts: data})
      })
      .catch(console.error)
  }

  render() {
    return (
      <NavMenu>
        <Container style={{marginTop: '88px'}}>
          <div className="posts-block">
            {this.state.posts.map(post => {
              return (
                <a href={"/posts/" + post.id} className="post post-horizontal" style={{backgroundImage: "url(" + post.imageURL + ")"}}
                   key={post.id}>
                  <img src={post.imageURL} alt="" className="post-stretch-image" />
                  <span className="post-title">{post.title}</span>
                </a>
              )
            })}
          </div>
        </Container>
      </NavMenu>
    );
  }
}