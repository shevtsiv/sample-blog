import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router";
import MainPage from "./pages/main";
import AboutPage from "./pages/about";
import DonatePage from "./pages/donate";
import PostPage from "./pages/post";

ReactDOM.render(
  // TODO: Fix routes to be absolute instead of relative to the current page url
  <BrowserRouter>
    <Route exact path="/" component={MainPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/donate" component={DonatePage}/>
    <Route exact path="/posts/:id" component={PostPage}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
