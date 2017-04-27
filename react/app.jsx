import React from "react";
import ReactDOM from "react-dom";
import Header from "./shared/Header.jsx";
import Home from "./pages/home.jsx";
import SignIn from "./pages/signin.jsx";
import SignUp from "./pages/signup.jsx";
import Main from "./layout/main.jsx";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="signin" component={ SignIn }/>
      <Route path="signup" component={ SignUp }/>
    </Route>
  </Router >,
  document.getElementById("app")
);