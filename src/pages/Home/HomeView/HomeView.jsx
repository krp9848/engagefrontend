import React from 'react'
import { useSelector } from 'react-redux'
import CreateTweet from '../../../components/CreateTweet/CreateTweet'
import DisplayTweets from '../../../components/DisplayTweets/DisplayTweets'
import './HomeView.scss'

export const HomeView = () => {
  const tweets = useSelector((state) => state.tweets)

  return (
    <div className="home-view">
      <CreateTweet />
      <DisplayTweets tweets={tweets} />
    </div>
  )
}
