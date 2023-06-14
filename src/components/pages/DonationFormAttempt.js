import React, { Component } from "react";
import InputMolecule from "../molecules/InputMolecule";

class Register extends Component {
  state = {
    name: "",
    message: "",
    donation: "",
    errors: {},
  };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const { name, message, donation } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required." } });
      return;
    }

    if (donation === "") {
      this.setState({ errors: { email: "donation amount is required." } });
      return;
    }

    const Donation = {
      name: name,
      message: message,
      donation: donation,
    };

    console.log(Donation);

    this.setState({ name: "", message: "", donation: "", errors: {} });
  };

  render() {
    const { name, message, donation, errors } = this.state;
    return (
      <div className="card">
        <div className="card-header">User Registration Form</div>
        <div className="card-body">
          <form onSubmit={this.onHandleSubmit}>
            <InputMolecule
              labelId="name"
              labelName="Name"
              type="text"
              name="name"
              value={name}
              onChange={this.onHandleChange}
              id="name"
              placeholder="Please enter your chosen name."
              error={errors.name}
            />

            <InputMolecule
              labelId="message"
              labelName="Message"
              type="text"
              name="message"
              value={message}
              onChange={this.onHandleChange}
              placeholder="Please feel free to add a message."
              id="message"
              error={errors.message}
            />

            <InputMolecule
              labelId="donation amount"
              labelName="Donation Amount"
              type="number"
              name="donation"
              value={donation}
              onChange={this.onHandleChange}
              placeholder="Please add a donation amount."
              id="donation"
              error={errors.donation}
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-outline-success float-end"
            />
            <a className="ReturnHome" href="/">
              Home Page
            </a>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
