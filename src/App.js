import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <div className="jumbotron">
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
