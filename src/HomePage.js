import React from "react";

const HomePage = ({ userData, onBack }) => {
  if (!userData) {
    return (
      <div className="page-container">
        <div className="error-message">
          <h2>⚠️ No Data Found</h2>
          <p>
            Please submit the form first to view your personalized home page.
          </p>
          <button onClick={onBack} className="back-button">
            Go to Form
          </button>
        </div>
      </div>
    );
  }

  // Get current date and time for greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Get random welcome message
  const welcomeMessages = [
    "Welcome to your dashboard",
    "Great to see you again",
    "Happy to have you here",
    "Your personalized space",
  ];

  const randomMessage =
    welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

  return (
    <div className="page-container home-page">
      {/* Welcome Header */}
      <div className="welcome-header">
        <h1>
          {getGreeting()}, {userData.firstname}!
          <span className="wave-emoji">👋</span>
        </h1>
        <p className="welcome-subtitle">{randomMessage}</p>
      </div>

      {/* User Profile Card */}
      <div className="profile-card">
        <div className="profile-avatar">
          {userData.firstname.charAt(0)}
          {userData.lastname.charAt(0)}
        </div>

        <h2 className="profile-name">
          {userData.firstname} {userData.lastname}
        </h2>

        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <div className="detail-content">
              <span className="detail-label">Location</span>
              <span className="detail-value">{userData.country}</span>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">📧</span>
            <div className="detail-content">
              <span className="detail-label">Email</span>
              <span className="detail-value">
                {userData.firstname.toLowerCase()}.
                {userData.lastname.toLowerCase()}@example.com
              </span>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">🆔</span>
            <div className="detail-content">
              <span className="detail-label">Member Since</span>
              <span className="detail-value">
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message Card */}
      <div className="welcome-card">
        <h3>Welcome to Your Dashboard! 🎉</h3>
        <p>
          We're excited to have you on board, {userData.firstname}! Your account
          has been successfully created and you're now part of our community.
        </p>
        <div className="welcome-stats">
          <div className="stat">
            <span className="stat-number">1</span>
            <span className="stat-label">Profile Created</span>
          </div>
          <div className="stat">
            <span className="stat-number">🌍</span>
            <span className="stat-label">{userData.country}</span>
          </div>
          <div className="stat">
            <span className="stat-number">✨</span>
            <span className="stat-label">New Member</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="action-buttons">
          <button
            className="action-button"
            onClick={() => alert("Edit profile (Demo)")}
          >
            <span>✏️</span> Edit Profile
          </button>
          <button
            className="action-button"
            onClick={() => alert("View settings (Demo)")}
          >
            <span>⚙️</span> Settings
          </button>
          <button
            className="action-button"
            onClick={() => alert("View messages (Demo)")}
          >
            <span>💬</span> Messages
          </button>
          <button className="action-button" onClick={onBack}>
            <span>📝</span> New Submission
          </button>
        </div>
      </div>

      {/* Footer Note */}
      <div className="home-footer">
        <p>
          ✨ This is your personalized home page based on the information you
          submitted.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
