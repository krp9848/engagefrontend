import React from 'react'
import { useSelector } from 'react-redux'
import Tweet from '../Tweet/Tweet'

const DisplayTweets = () => {
  const tweets = useSelector((state) => state.tweets)

  return (
    <div>
      <h2>All Tweets</h2>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  )
}

export default DisplayTweets
