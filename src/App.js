import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <div className="jumbotron">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Signup} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
