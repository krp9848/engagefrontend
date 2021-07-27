import React, { useEffect } from 'react'
import { HomeView } from '../HomeView/HomeView'
import Sidebar from '../../../components/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { initTweets } from '../../../reducers/tweetReducer'
import { initUsers } from '../../../reducers/userReducer'
import './HomeContainer.scss'
import SearchAndSuggest from '../../../components/SearchAndSuggest/SearchAndSuggest'
import { initUser } from '../../../reducers/currentUserReducer'

export const HomeContainer = () => {
  const dispatch = useDispatch()
  const currentUserId = useSelector((state) => state.loggedInUser.id)

  // load the current user
  useEffect(() => {
    dispatch(initUser(currentUserId))
  }, [])
  useEffect(() => {
    dispatch(initTweets())
  }, [])
  useEffect(() => {
    dispatch(initUsers())
  }, [])
  return (
    <div className="home-container">
      <Sidebar />
      <HomeView />
      <SearchAndSuggest />
    </div>
  )
}
