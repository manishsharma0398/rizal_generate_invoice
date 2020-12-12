import React, { Component } from "react";
import TextInput from "../form-inputs/TextInput";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      address: "",
      state: "",
      gstNo: "",
    };
  }

  onInputChange = (e) => {
    this.setState({ [`${e.target.id}`]: e.target.value });
  };

  onSubmitSignupForm = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password, name, address, state, gstNo } = this.state;
    return (
      <div className="row col-md-8 mx-auto card mt-5">
        <form onSubmit={this.onSubmitSignupForm} className="card-body">
          <h3 className="card-title text-center pb-2">Sign Up</h3>

          <TextInput
            id="name"
            label="Business/Individual Name"
            onChange={this.onInputChange}
            value={name}
            invalid=""
            invalidText=""
            placeholder="Business or Individual Name"
          />

          <TextInput
            id="address"
            label="Business Place Address"
            onChange={this.onInputChange}
            value={address}
            invalid=""
            invalidText=""
            placeholder="Business Place Address"
          />
          {/* TODO: dropdown menu for selecting state */}
          <TextInput
            id="state"
            label="Select Bussiness Operating State"
            onChange={this.onInputChange}
            value={state}
            invalid=""
            invalidText=""
            placeholder="Eg. Sikkim, Goa, Manipur, etc"
          />

          <TextInput
            id="gstNo"
            label="Gst No (Optional)"
            onChange={this.onInputChange}
            value={gstNo}
            invalid=""
            invalidText=""
            placeholder="Your Gst Number"
            required={false}
          />

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
            label="Create a Password"
            onChange={this.onInputChange}
            value={password}
            invalid=""
            invalidText=""
            placeholder="You need this to login"
          />

          <div className="d-grid mt-2 mb-3">
            <button className="btn btn-primary btn-block" type="submit">
              Sign Up
            </button>
          </div>

          <p>
            Already have an account ? <Link to="/login">Log In Here</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Signup;
