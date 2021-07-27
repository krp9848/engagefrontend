import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../../reducers/userReducer'

import './ProfileHeader.scss'

const ProfileHeader = ({ username }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.currentUser)
  const [currentProfileUser] = useSelector((state) =>
    state.users.filter((user) => user.username === username)
  )

  console.log('currentUser', currentUser)
  console.log('currentProfileUser', currentProfileUser)
  const ownProfile =
    (currentUser && currentUser.username) ===
    (currentProfileUser && currentProfileUser.username)
  let alreadyFollowing = false
  if (!ownProfile) {
    alreadyFollowing =
      currentProfileUser &&
      currentProfileUser.followers.find(
        (follower) => follower.toString() === currentUser.id.toString()
      )
  }

  const handleFollowUnfollow = () => {
    if (alreadyFollowing) {
      console.log('Unfollowing now')
      dispatch(unfollowUser(currentProfileUser.id))
    } else {
      console.log('following now')
      dispatch(followUser(currentProfileUser.id))
    }
  }

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
          <div className="profile-username">
            &#64;{currentProfileUser && currentProfileUser.username}{' '}
          </div>
          {ownProfile ? (
            <button>Edit Profile</button>
          ) : (
            <button onClick={handleFollowUnfollow}>
              {alreadyFollowing ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
        <div className="profile-info-stats">
          <p className="count-post">
            {currentProfileUser && currentProfileUser.tweets.length}{' '}
            <span>posts</span>
          </p>
          <p className="count-followers">
            {currentProfileUser && currentProfileUser.followers.length}{' '}
            <span>followers</span>
          </p>
          <p className="count-post">
            {currentProfileUser && currentProfileUser.following.length}{' '}
            <span>following</span>
          </p>
        </div>
        <div className="profile-info-desc">
          <div className="profile-name">
            {currentProfileUser && currentProfileUser.name}
          </div>
          <div className="profile-desc">
            {currentProfileUser && currentProfileUser.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
