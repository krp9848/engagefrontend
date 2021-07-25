import tweetService from '../services/tweets'
import loginService from '../services/login'

// check if the user information is present in local storage
export const checkLoggedUser = () => {
  return async (dispatch) => {
    const loggedUser = window.localStorage.getItem('loggedEngageAppUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      dispatch({ type: 'SET_USER', user })
      tweetService.setToken(user.token)
    }
  }
}

// handle login

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login(credentials)
      window.localStorage.setItem('loggedEngageAppUser', JSON.stringify(user))
      tweetService.setToken(user.token)
      dispatch({ type: 'SET_USER', user })
    } catch (exception) {
      console.log('exception', exception)
    }
  }
}

// handle logout
export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: 'SET_USER', user: null })
    window.localStorage.removeItem('loggedEngageAppUser')
  }
}

const loginReducer = (state = null, action) => {
  console.log('state now', state)
  console.log('action', action)
  switch (action.type) {
  case 'SET_USER':
    return action.user
  case 'REMOVE_USER':
    return null
  default:
    return state
  }
}

export default loginReducer
