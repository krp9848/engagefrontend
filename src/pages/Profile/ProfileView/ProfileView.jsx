import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import DisplayTweets from '../../../components/DisplayTweets/DisplayTweets'
import ProfileHeader from '../../../components/ProfileHeader/ProfileHeader'
import './ProfileView.scss'
const ProfileView = () => {
  const { username } = useParams()
  const tweets = useSelector((state) =>
    state.tweets.filter((tweet) => tweet.user.username === username)
  )

  return (
    <div className="profile-view">
      <ProfileHeader username={username} />
      <DisplayTweets tweets={tweets} />
    </div>
  )
}

export default ProfileView
