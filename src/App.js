import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "../src/components/footer";
import Home from "../src/views/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </Router>
      // <Home />
      // <Footer />
    </React.Fragment>
  );
}

export default App;
