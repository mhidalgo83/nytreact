import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path = "/home" component={Home} />
            <Route exact path = "/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
