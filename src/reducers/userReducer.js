import userService from '../services/users'
import { login } from './loginReducer'
import { setNotification } from './notificationReducer'

export const initUsers = () => {
  return async (dispatch) => {
    const data = await userService.getAll()
    console.log('Requesting all users')
    dispatch({ type: 'INIT_USERS', data })
  }
}

export const createUser = (newUser) => {
  return async (dispatch) => {
    try {
      const user = await userService.create(newUser)
      dispatch(login({ username: user.username, password: newUser.password }))
    } catch (error) {
      dispatch(
        setNotification(
          {
            message: `${error.response.data.error}`,
            messageType: 'failure',
          },
          5
        )
      )
    }
  }
}

const userReducer = (state = [], action) => {
  console.log('state now', state)
  console.log('action', action)
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  default:
    return state
  }
}

export default userReducer
