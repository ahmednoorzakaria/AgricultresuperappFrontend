import React from 'react';
import './Profilepage.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="your-profile-picture.jpg"
          alt="Profile Picture"
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>Your Username</h1>
          <p>Your Bio</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="profile-stat">
          <span>Posts</span>
          <strong>100</strong>
        </div>
        <div className="profile-stat">
          <span>Followers</span>
          <strong>10k</strong>
        </div>
        <div className="profile-stat">
          <span>Following</span>
          <strong>500</strong>
        </div>
      </div>
      <div className="profile-posts">
        {/* Display user's posts (images or content) in a grid */}
        {/* You can map through your posts data and render each post */}
      </div>
    </div>
  );
};

export default Profile;
