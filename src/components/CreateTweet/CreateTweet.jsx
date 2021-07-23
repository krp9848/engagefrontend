import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTweet } from '../../reducers/tweetReducer'

import './CreateTweet.scss'

const CreateTweet = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    const newTweet = { text }
    dispatch(createTweet(newTweet))
    setText('')
  }
  return (
    <div className="create-tweet-container">
      <div className="profile-img">
        <img
          src="https://krp9848.github.io/portfolio/static/media/profile.a110496e.jpeg"
          alt="profile image"
        />
      </div>
      <div className="tweet-form-container">
        <form onSubmit={handleSubmit}>
          <div className="tweet-text">
            <textarea
              name="tweet-textdata"
              id="tweet-text"
              cols="30"
              rows="10"
              placeholder="Share your thoughts"
              value={text}
              onChange={({ target }) => setText(target.value)}
              required
            ></textarea>
          </div>
          <button id="tweet-button" type="submit">
            Engage
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateTweet
