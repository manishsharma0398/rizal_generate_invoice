import React, { Component } from "react";

import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { auth, getUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import Dashboard from "./components/dashboard/Dashboard";
import InvoiceForm from "./components/invoice-form/InvoiceForm";
import InvoicePDF from "./components/invoice-pdf/InvoicePDF";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userProfileData = await getUserProfileDocument(userAuth.uid);
        this.props.setCurrentUser({
          userId: userAuth.uid,
          email: userAuth.email,
          ...userProfileData,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { userLoggedIn } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <div className="jumbotron">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() =>
                    userLoggedIn ? (
                      <Redirect to="/dashboard" />
                    ) : (
                      <LandingPage />
                    )
                  }
                />
                <Route
                  exact
                  path="/invoice"
                  // render={() => (userLoggedIn ? <InvoicePDF /> : <Login />)}
                  component={InvoicePDF}
                />
                <Route
                  exact
                  path="/dashboard"
                  render={() =>
                    userLoggedIn ? <Dashboard /> : <Redirect to="/login" />
                  }
                />
                <Route
                  exact
                  path="/create-invoice"
                  render={() =>
                    userLoggedIn ? <InvoiceForm /> : <Redirect to="/login" />
                  }
                />
                <Route
                  exact
                  path="/login"
                  render={() =>
                    userLoggedIn ? <Redirect to="/dashboard" /> : <Login />
                  }
                />
                <Route
                  exact
                  path="/register"
                  render={() =>
                    userLoggedIn ? <Redirect to="/dashboard" /> : <Signup />
                  }
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  userLoggedIn: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (userDetails) => dispatch(setCurrentUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
