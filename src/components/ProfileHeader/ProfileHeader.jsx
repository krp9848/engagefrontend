import React from 'react'

import './ProfileHeader.scss'

const ProfileHeader = () => {
  return (
    <div className="profile-header-container">
      <div className="profile-image">
        <img
          src="https://krp9848.github.io/portfolio/static/media/profile.a110496e.jpeg"
          alt="profile photo"
        />
      </div>

      <div className="profile-info">
        <div className="profile-info-main">
          <div className="profile-username">&#64;kabirajpant</div>
          <button>Edit Profile</button>
        </div>
        <div className="profile-info-stats">
          <p className="count-post">
            3 <span>posts</span>
          </p>
          <p className="count-followers">
            111 <span>followers</span>
          </p>
          <p className="count-post">
            93 <span>following</span>
          </p>
        </div>
        <div className="profile-info-desc">
          <div className="profile-name">Kabi Raj Pant</div>
          <div className="profile-desc">Software Engineer</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
