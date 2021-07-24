import React from 'react'
import './User.scss'

const User = ({ user: { name, username } }) => {
  return (
    <div className="user">
      <div className="user-image">
        <img
          src="https://krp9848.github.io/portfolio/static/media/profile.a110496e.jpeg"
          alt="profile image"
        />
      </div>
      <div className="user-details">
        <p className="name">{name}</p>
        <p className="username">&#64;{username}</p>
      </div>
    </div>
  )
}

export default User
