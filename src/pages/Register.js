import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account-settings');
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h1 className="register-title">Create your PopX account</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              Full Name<span className="required">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="phoneNumber">
              Phone number<span className="required">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="emailAddress">
              Email address<span className="required">*</span>
            </label>
            <input
              id="emailAddress"
              type="email"
              name="emailAddress"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="companyName">
              Company name
            </label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="agency-group">
            <p className="agency-label">
              Are you an Agency?<span className="required">*</span>
            </p>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                Yes
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                  className="radio-input"
                />
                <span className="radio-custom"></span>
                No
              </label>
            </div>
          </div>

          <button type="submit" className="btn-create">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
