import React, { Component } from "react";
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

  onSubmitLoginForm = (e) => {
    e.preventDefault();
    console.log(this.state.email, this.state.password);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="row col-md-8 mx-auto card">
        <form onSubmit={this.onSubmitLoginForm} className="card-body">
          <h3 className="card-title text-center">Login</h3>

          <TextInput
            id="email"
            type="email"
            label="Email"
            onChange={this.onInputChange}
            value={email}
            invalid=""
            invalidText=""
            placeholder="user@gmail.com"
          />

          <TextInput
            id="password"
            type="password"
            label="Password"
            onChange={this.onInputChange}
            value={password}
            invalid=""
            invalidText=""
            placeholder="Your account password"
          />

          <div className="d-grid">
            <button className="btn btn-primary btn-block" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
