import React from 'react'
import DisplayTweets from '../../../components/DisplayTweets/DisplayTweets'
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader'
import './ProfileView.scss'
const ProfileView = () => {
  return (
    <div className="profile-view">
      <ProfileHeader />
      <DisplayTweets />
    </div>
  )
}

export default ProfileView
