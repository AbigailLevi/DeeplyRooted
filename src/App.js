import React from "react";
import "./App.css";

import Login from "./views/Login";
import Home from "../src/views/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home /> 
          </Route>
          <Route path="/" exact={true}>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
