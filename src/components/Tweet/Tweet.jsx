import React from 'react'
import './Tweet.scss'
import { FaHeart, FaComment, FaRetweet } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { likeTweet, retweetTweet } from '../../reducers/tweetReducer'

const Tweet = ({ tweet }) => {
  const dispatch = useDispatch()
  const handleRetweet = () => {
    dispatch(retweetTweet(tweet.id))
  }

  const handleLike = () => {
    dispatch(likeTweet(tweet.id))
  }
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
          <div className="retweet" onClick={handleRetweet}>
            <FaRetweet />
            <span>{tweet.retweets.length}</span>
          </div>
          <div className="likes" onClick={handleLike}>
            <FaHeart />
            <span>{tweet.likes.length}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet
