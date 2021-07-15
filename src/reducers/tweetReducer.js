import tweetService from '../services/tweets'
import { setNotification } from './notificationReducer'

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

    dispatch(
      setNotification(
        {
          message: 'new tweet added',
          messageType: 'success',
        },
        5
      )
    )
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
  default:
    return state
  }
}

export default tweetReducer
