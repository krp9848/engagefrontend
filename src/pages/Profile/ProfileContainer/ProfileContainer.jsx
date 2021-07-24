import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SearchAndSuggest from '../../../components/SearchAndSuggest/SearchAndSuggest'
import Sidebar from '../../../components/Sidebar/Sidebar'
import { initTweets } from '../../../reducers/tweetReducer'
import { initUsers } from '../../../reducers/userReducer'
import ProfileView from '../ProfileView/ProfileView'
import './ProfileContainer.scss'

export const ProfileContainer = () => {
  // change this when user specific reducer is added
  const dispatch = useDispatch()

  // load all the tweets
  useEffect(() => {
    dispatch(initTweets())
  }, [])
  // load all the users
  useEffect(() => {
    dispatch(initUsers())
  }, [])

  return (
    <div className="profile-container">
      <Sidebar />
      <ProfileView />
      <SearchAndSuggest />
    </div>
  )
}
