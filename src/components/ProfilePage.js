import React, { useState } from 'react';
import './ProfilePage.css';

function ProfilePage() {
  const [editMode, setEditMode] = useState(false);
  const [bioText, setBioText] = useState('');

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleBioChange = (e) => {
    setBioText(e.target.value);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-picture">
          <img
            src="https://www.google.com/search?q=profile+logo+image+agricultural+website+&tbm=isch&ved=2ahUKEwjMrMCmsqKCAxVmsCcCHdEZBm4Q2-cCegQIABAA&oq=profile+logo+image+agricultural+website+&gs_lcp=CgNpbWcQA1DDBlihUGDDVGgAcAB4AIAByQOIAcckkgEHMi03LjYuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=pg1CZczBN-bgnsEP0bOY8AY&bih=664&biw=1296#imgrc=8qbccAKfGSQ0bM"
            alt="User Profile"
          />
        </div>
        <div className="profile-details">
          <h1>Name</h1>
          <p>@username</p>
          <FollowCount followers={100} following={50} />
          <button className="edit-profile-button" onClick={handleEditClick}>
            Edit Profile
          </button>
        </div>
      </div>
      <div className="bio-section">
        <h2>Bio</h2>
        {editMode ? (
          <textarea
            value={bioText}
            onChange={handleBioChange}
            placeholder="Enter your bio here"
          />
        ) : (
          <p>{bioText || 'No bio provided'}</p>
        )}
        <p>Location: Your Location</p>
        {editMode ? (
          <button className="edit-bio-button" onClick={handleEditClick}>
            Save
          </button>
        ) : (
          <button className="edit-bio-button" onClick={handleEditClick}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

function FollowCount({ followers, following }) {
  return (
    <div className="follow-count">
      <p>{followers} Followers</p>
      <p>{following} Following</p>
    </div>
  );
}

export default ProfilePage;
