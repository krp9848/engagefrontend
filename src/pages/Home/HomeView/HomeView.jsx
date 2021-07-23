import React from 'react'
import CreateTweet from '../../../components/CreateTweet/CreateTweet'
import DisplayTweets from '../../../components/DisplayTweets/DisplayTweets'

export const HomeView = () => {
  return (
    <div className="home-view">
      <CreateTweet />
      <DisplayTweets />
    </div>
  )
}
