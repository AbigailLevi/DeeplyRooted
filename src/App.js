import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import login from "../src/components/login"
import Footer from "../src/components/footer";
import Home from "../src/views/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <Footer />
    </React.Fragment>
    <Router>
     <Link to="/">login</Link>
      <Switch>
        <Route path="/login">
          <login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
