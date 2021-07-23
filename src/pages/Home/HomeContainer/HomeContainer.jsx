import React, { useEffect } from 'react'
import { HomeView } from '../HomeView/HomeView'
import Sidebar from '../../../components/Sidebar/Sidebar'
import { useDispatch } from 'react-redux'
import { initTweets } from '../../../reducers/tweetReducer'

import './HomeContainer.scss'

export const HomeContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initTweets())
  }, [])
  return (
    <div className="home-container">
      <Sidebar />
      <HomeView />
    </div>
  )
}
