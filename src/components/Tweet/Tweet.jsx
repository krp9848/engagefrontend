import React from 'react'
import './Tweet.scss'
import { FaHeart, FaComment, FaRetweet } from 'react-icons/fa'

const Tweet = ({ tweet }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-user">
        <img
          src="https://krp9848.github.io/portfolio/static/media/profile.a110496e.jpeg"
          alt="profile image"
        />
      </div>
      <div className="tweet-info">
        <div className="tweet-title-info">
          <span>{tweet.user.name}</span>
          <span>&#64;{tweet.user.username}</span>
          <span>{tweet.tweetedAt.substring(0, 10)}</span>
        </div>
        <div className="tweet-text">{tweet.text}</div>
        <div className="tweet-stats">
          <div className="comment">
            <FaComment />
            <span>1</span>
          </div>
          <div className="retweet">
            <FaRetweet />
            <span>112</span>
          </div>
          <div className="likes">
            <FaHeart />
            <span>14</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
