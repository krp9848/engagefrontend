import { toast } from 'react-toastify'
import tweetService from '../services/tweets'

export const initTweets = () => {
  return async (dispatch) => {
    const data = await tweetService.getAll()
    console.log('request all tweets')
    dispatch({ type: 'INIT_TWEETS', data })
  }
}

export const createTweet = (newTweet) => {
  return async (dispatch) => {
    const data = await tweetService.create(newTweet)

    dispatch({
      type: 'CREATE_TWEET',
      data,
    })
    toast.success('New Tweet added'.toUpperCase())
  }
}

export const likeTweet = (tweetId) => {
  return async (dispatch) => {
    const updatedTweet = await tweetService.tweetLike(tweetId)

    dispatch({
      type: 'UPDATE_TWEET',
      updatedTweet,
    })
  }
}

export const retweetTweet = (tweetId) => {
  return async (dispatch) => {
    const updatedTweet = await tweetService.tweetRetweet(tweetId)

    dispatch({
      type: 'UPDATE_TWEET',
      updatedTweet,
    })
  }
}

const tweetReducer = (state = [], action) => {
  console.log('state now', state)
  console.log('action', action)
  switch (action.type) {
  case 'INIT_TWEETS':
    return action.data
  case 'CREATE_TWEET':
    return state.concat(action.data)
  case 'UPDATE_TWEET':
    return state.map((tweet) =>
      tweet.id.toString() !== action.updatedTweet.id.toString()
        ? tweet
        : action.updatedTweet
    )
  default:
    return state
  }
}

export default tweetReducer
