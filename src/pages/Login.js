import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/account-settings');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Signin to your PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
