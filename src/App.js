import React from "react";
import "./App.css";

import Login from "./views/Login";
import Home from "../src/views/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import Intro from "./views/Intro";
import NavBar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Router>
        <Switch>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/intro" />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
