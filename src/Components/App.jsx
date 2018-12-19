import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Films from "./Films";
import People from "./People";
import logo from "./../assets/logo.png";

class App extends Component {
  render() {
    return (
      <>
        <h1>
          <img src={logo} alt="" />
        </h1>
        <Router>
          <>
            <Link to="/" className="m-2 ">
              Home
            </Link>
            <Link to="/Films" className="m-2">
              Films
            </Link>
            <Link to="/People" className="m-2">
              People
            </Link>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/Films" component={Films} />
              <Route exact path="/People" component={People} />
            </Switch>
          </>
        </Router>
      </>
    );
  }
}

export default App;
