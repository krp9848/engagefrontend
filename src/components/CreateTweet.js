import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTweet } from '../reducers/tweetReducer'

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
    <form onSubmit={handleSubmit}>
      <div>
        Tweet Text
        <input
          type="text"
          id="tweet-text"
          value={text}
          onChange={({ target }) => setText(target.value)}
          required
        />
      </div>
      <button type="submit">Tweet</button>
    </form>
  )
}

export default CreateTweet
