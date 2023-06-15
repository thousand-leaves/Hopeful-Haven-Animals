import React, { useState } from 'react';
import InputMolecule from '../molecules/InputMolecule';
import GenericButtonAtom from '../atoms/GenericButtonAtom';

const SettingsPage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [fullName, setFullName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleDeleteAccount = () => {
    // Handle delete account logic here
  };

  const handleSavePaymentDetails = () => {
    // Handle save payment details logic here
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleSecurityCodeChange = (event) => {
    setSecurityCode(event.target.value);
  };

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
          <GenericButtonAtom onClick={handleDeleteAccount} label="Delete" />
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
              onClick={handleToggleInfo}
            ></i>
            <i className="fa fa-trash float-end" aria-hidden="true"></i>
          </div>
          {showInfo && (
            <div className="card-body">
              <ul className="list-group">
                <InputMolecule
                    labelName="Full Name"
                    type="text"
                    value={fullName}
                    onChange={handleFullNameChange}
                    placeholder='Please enter your full name'
                />

                <InputMolecule
                labelName='Card Number'
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder='Please enter your 16 digit card number'
                />

                <form className="form-inline my-2 my-lg-0 d-flex">
                <InputMolecule
                labelName="Expiry Date"
                type="text"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder='MM/YY'
                />

                <InputMolecule
                labelName="Security Code"
                type="text"
                value={securityCode}
                onChange={handleSecurityCodeChange}
                placeholder='CVV'
                />
                </form>

                <div className="save-payment-details-checkbox">
                  <input type="checkbox" id="savePaymentDetailsCheckbox" />
                  <label htmlFor="savePaymentDetailsCheckbox">
                    Are you sure?
                  </label>
                </div>

                <GenericButtonAtom
                  onClick={handleSavePaymentDetails}
                  label="Save Payment Method"
                />
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
