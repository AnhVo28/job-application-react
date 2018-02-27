import React, { Component } from "react";
import "./css/App.scss";
import "./css/bootstrap.min.css";
import MainPage from "./components/MainPage";


import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/home" />} />
              <Route
                path="/home"
                render={({ match }) => <MainPage match={match} />}
              />
              <Route
                path="/404"
                render={() => <h1 className="notFound">Page not found!</h1>}
              />
              <Redirect to="/404" />
            </Switch>
          </div>
        </Router>
    
      </div>
    );
  }
}

export default App;
