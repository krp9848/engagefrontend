import React from 'react'
import Tweet from '../Tweet/Tweet'

const DisplayTweets = ({ tweets }) => {
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
