// RegistrationPage.js
import React, { useState } from 'react';
import './RegistrationPage.css';
import loginImage from '../../assets/—Pngtree—purple office ui registration illustration_4978562.png';

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aadharCardNumber, setAadharCardNumber] = useState('');
  const [aadharCardFile, setAadharCardFile] = useState(null);

  const handleRegister = async () => {
    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('aadharCardNumber', aadharCardNumber);
      formData.append('aadharCard', aadharCardFile);

      const response = await fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAadharCardChange = (e) => {
    const file = e.target.files[0];
    setAadharCardFile(file);
  };

  return (
    <div className="container">
      <div className="card-container1">
        <div className="registration-form">
          <h2 className="mb-4">Register</h2>
          <div className="mb-3">
            <label className="form-label">Full Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Aadhar Card Number:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Aadhar Card Number"
              value={aadharCardNumber}
              onChange={(e) => setAadharCardNumber(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Aadhar Card:</label>
            <input
              type="file"
              className="form-control"
              accept=".jpg, .jpeg, .png, .pdf"
              onChange={handleAadharCardChange}
            />
          </div>

          <div className="mb-3">
            <button
              type="button"
              onClick={handleRegister}
              className="btn btn-primary"
            >
              Create Account
            </button>
          </div>
        </div>
        <div className="image-container">
          <img src={loginImage} alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
