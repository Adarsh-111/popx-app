import React from 'react';
import './AccountSettings.css';

const AccountSettings = () => {
  return (
    <div className="account-container">
      <h2 className="account-heading">Account Settings</h2>

      <div className="profile-section">
        <div className="avatar-wrapper">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Marry Doe"
            className="avatar-image"
          />
          <div className="avatar-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <h3 className="profile-name">Marry Doe</h3>
          <p className="profile-email">Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="divider" />

      <p className="account-bio">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
        Sed Diam
      </p>

      <div className="divider" />
    </div>
  );
};

export default AccountSettings;
