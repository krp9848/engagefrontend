import React from 'react'
import { useSelector } from 'react-redux'

import './ProfileHeader.scss'

const ProfileHeader = ({ username }) => {
  const users = useSelector((state) =>
    state.users.filter((user) => user.username === username)
  )

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
          <div className="profile-username">&#64;{username}</div>
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
          <div className="profile-name">
            {users.length > 0 && users[0].name}
          </div>
          <div className="profile-desc">Something about myself</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
