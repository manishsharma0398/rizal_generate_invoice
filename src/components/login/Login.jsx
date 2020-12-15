import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginWithEmail } from "../../firebase/firebase.utils";
import { setUserError } from "../../redux/user/user-action";
import TextInput from "../form-inputs/TextInput";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ [`${e.target.id}`]: e.target.value });
  };

  onSubmitLoginForm = async (e) => {
    const { email, password } = this.state;

    e.preventDefault();
    console.log(this.state.email, this.state.password);
    const data = await loginWithEmail(email, password);
    console.log(data);

    if (data === undefined) {
      this.setState({
        email: "",
        password: "",
      });
      this.props.setUserLoginError(null);
    }

    if (data === "auth/user-not-found") {
      this.props.setUserLoginError({ email: "No user with this email" });
    }

    if (data === "auth/wrong-password") {
      this.props.setUserLoginError({ password: "Password Incorrect" });
    }

    if (data === "auth/invalid-email") {
      this.props.setUserLoginError({ email: "Please enter a valid email" });
    }
  };

  render() {
    const { email, password } = this.state;
    const { loginErrors } = this.props;

    return (
      <div className="row col-md-8 mx-auto card mt-5">
        <form onSubmit={this.onSubmitLoginForm} className="card-body">
          <h3 className="card-title text-center pb-2">Login</h3>

          <TextInput
            id="email"
            type="email"
            label="Email"
            onChange={this.onInputChange}
            value={email}
            invalid={loginErrors && Object.keys(loginErrors)[0] === "email"}
            invalidText={loginErrors && loginErrors.email}
            placeholder="user@gmail.com"
            required={false}
          />

          <TextInput
            id="password"
            type="password"
            label="Password"
            onChange={this.onInputChange}
            value={password}
            invalid={loginErrors && Object.keys(loginErrors)[0] === "password"}
            invalidText={loginErrors && loginErrors.password}
            placeholder="Your account password"
            required={false}
          />

          <Link to="/forgot-password">Forgot password</Link>

          <div className="d-grid mt-2 mb-3">
            <button className="btn btn-primary btn-block" type="submit">
              Log In
            </button>
          </div>

          <p>
            Don't have an account ? <Link to="/register">Create One</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user: { errors } }) => ({
  loginErrors: errors,
});

const mapDispatchToProps = (dispatch) => ({
  setUserLoginError: (errors) => dispatch(setUserError(errors)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
