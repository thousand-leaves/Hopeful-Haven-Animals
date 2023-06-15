import PropTypes from "prop-types";
import React, { Component } from "react";
import LabelAtom from "../atoms/LabelAtom";
import InputAtom from "../atoms/InputAtom";

class SettingsPage extends Component {
  state = {
    showInfo: false,
    fullName: "",
    cardNumber: "",
    expiryDate: "",
    securityCode: "",
  };

  onHandleClick = () => {
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo,
    }));
  };

  onDeleteAccount = () => {
    // Handle the deletion of the account here
  };

  onSavePaymentDetails = () => {
    // Handle the saving of the payment details here
  };

  handleFullNameChange = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };

  handleCardNumberChange = (event) => {
    this.setState({
      cardNumber: event.target.value,
    });
  };

  handleExpiryDateChange = (event) => {
    this.setState({
      expiryDate: event.target.value,
    });
  };

  handleSecurityCodeChange = (event) => {
    this.setState({
      securityCode: event.target.value,
    });
  };

  render() {
    const { showInfo, fullName, cardNumber, expiryDate, securityCode } =
      this.state;
    return (
      <div className="settings-page">
        <div className="white-box">
          <div className="delete-account-header">
            <h3>Delete Account</h3>
            <p className="delete-account-text">
            Deleting your account will permanently remove all your data and access to the platform. This action cannot be undone.
            </p>
          </div>
          <div className="delete-account-actions">
            <div className="delete-account-checkbox">
              <input type="checkbox" id="deleteCheckbox" />
              <label htmlFor="deleteCheckbox">Are you sure?</label>
            </div>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.onDeleteAccount}
            >
              Delete Account
            </button>
          </div>
        </div>

        <div className="payment-details">
          <div className="card mb-1">
            <div className="card-header">
              <i className="fa fa-credit-card-alt mx-1" aria-hidden="true"></i>
              Payment Details
              <i
                className="fa fa-chevron-down mx-1"
                aria-hidden="true"
                onClick={this.onHandleClick}
              ></i>
              <i
                className="fa fa-trash float-end"
                aria-hidden="true"
                onClick={this.onDeleteUser}
              ></i>
            </div>
            {showInfo && (
              <div className="card-body">
                <ul className="list-group">
                  <LabelAtom labelId="fullName" labelName="Full Name" />
                  <InputAtom
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={this.handleFullNameChange}
                    id="fullName"
                    placeholder="Please enter your full name"
                  />
                  <LabelAtom labelId="cardNumber" labelName="Card Number" />
                  <InputAtom
                    type="text"
                    name="cardNumber"
                    value={cardNumber}
                    onChange={this.handleCardNumberChange}
                    id="cardNumber"
                    placeholder="Please enter your 16 digit card number"
                  />

                  <LabelAtom labelId="expiryDate" labelName="Expiry Date" />
                    <form className="form-inline my-2 my-lg-0 d-flex">
                  <InputAtom
                    type="text"
                    name="expiryDate"
                    value={expiryDate}
                    onChange={this.handleExpiryDateChange}
                    id="expiryDate"
                    placeholder="DD/MM/YYYY"
                  />

                    <LabelAtom labelId="securityCode" labelName="Security Code" />
                  <InputAtom
                    type="text"
                    name="securityCode"
                    value={securityCode}
                    onChange={this.handleSecurityCodeChange}
                    id="securityCode"
                    placeholder="CVC"
                    />
                    </form>
                  <div className="save-payment-details-checkbox">
                    <input type="checkbox" id="savePaymentDetailsCheckbox" />
                    <label htmlFor="savePaymentDetailsCheckbox">
                      Are you sure?
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    onClick={this.onSavePaymentDetails}
                  >
                    Save Payment Details
                  </button>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

SettingsPage.propTypes = {
  showInfo: PropTypes.bool.isRequired,
  fullName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  securityCode: PropTypes.string.isRequired,
};

export default SettingsPage;
