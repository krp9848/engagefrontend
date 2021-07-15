import userService from '../services/users'
import { login } from './loginReducer'
import { setNotification } from './notificationReducer'

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
  default:
    return state
  }
}

export default userReducer
