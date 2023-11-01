import React from 'react';
import './ProfilePage.css';

function ProfilePicture() {
  return (
    <div className="profile-picture">
      <img src="https://www.google.com/search?q=profile+logo+image+agricultural+website+&tbm=isch&ved=2ahUKEwjMrMCmsqKCAxVmsCcCHdEZBm4Q2-cCegQIABAA&oq=profile+logo+image+agricultural+website+&gs_lcp=CgNpbWcQA1DDBlihUGDDVGgAcAB4AIAByQOIAcckkgEHMi03LjYuMpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=pg1CZczBN-bgnsEP0bOY8AY&bih=664&biw=1296#imgrc=8qbccAKfGSQ0bM" alt="User Profile" />
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

function BioSection() {
  return (
    <div className="bio-section">
      <h2>Bio</h2>
      <p>

      </p>
      <p>Location: Your Location</p>
      <button className="edit-bio-button">Edit Profile</button>
    </div>
  );
}

function BlogPostSection() {
  return (
    <div className="blog-post-section">
      <h2>Posts</h2>
      <div className="blog-post">
        <h3>Blog/Post Title</h3>
        <p>Date</p>
        <p>Short preview of the blog post content.</p>
      </div>
      {/* Repeat the structure for multiple blog posts */}
      <button className="create-post-button">New Post</button>
    </div>
  );
}
function ActivitySection() {
  return (
    <div className="activity-section">
      <h2>Activity</h2>
      <div className="activity-item">
        {/* Display recent activity items, e.g., new followers, likes, comments */}
      </div>
      <button className="view-activity-button">View All Activity</button>
    </div>
  );
}

function SidebarSection() {
  return (
    <div className="sidebar-section">
      <h2>Sidebar</h2>
      <div className="recent-blog-posts">
        <p>Blog/Post Title</p>
        <p>Date</p>
      </div>
      {/* Repeat the structure for multiple recent blog posts */}
      <button className="view-blog-button">View All Blog Posts</button>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>&copy; 2023 Your Website</p>
      <div className="social-media-icons">
        {/* Add social media icons and links here */}
      </div>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="profile-page">
      <header>
        <ProfilePicture />
        <div className="profile-details">
          <h1>Name</h1>
          <p>@username</p>
          <FollowCount followers={100} following={50} />
        </div>
        <button className="edit-profile-button">Edit Profile</button>
      </header>
      <BioSection />
      <BlogPostSection />
      <ActivitySection />
      <SidebarSection />
      <Footer />
    </div>
  );
}

export default ProfilePage;
