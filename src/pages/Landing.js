import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-text">
          <h1 className="landing-title">Welcome to PopX</h1>
          <p className="landing-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="landing-buttons">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/register')}
          >
            Create Account
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
