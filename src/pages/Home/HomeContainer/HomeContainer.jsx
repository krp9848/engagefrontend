import React, { useEffect } from 'react'
import { HomeView } from '../HomeView/HomeView'
import Sidebar from '../../../components/Sidebar/Sidebar'
import { useDispatch } from 'react-redux'
import { initTweets } from '../../../reducers/tweetReducer'
import { initUsers } from '../../../reducers/userReducer'
import './HomeContainer.scss'
import SearchAndSuggest from '../../../components/SearchAndSuggest/SearchAndSuggest'

export const HomeContainer = () => {
  const dispatch = useDispatch()
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
